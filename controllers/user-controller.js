const { User } = require('../models');

const userController = {

    // get all users
    getAllUsers(req, res) {
        User.find({})
            .populate({
                path: 'thoughts',
            })
            .populate({
                path: 'friends'
            })
            .select('-__v')

            .then(dbUserData => res.json(dbUserData))
        
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // get one user by id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .populate({
                path: 'thoughts',
            })
            .populate({
                path: 'friends'
            })
            .select('-__v')
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'There was no user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // create a User
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));
    },

    // update user by id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then(dbUserData => {
            if (!dbUserData) {
            res.status(404).json({ message: 'There was no user found with this id!' });
            return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },

    // delete user
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'There was no user found with this id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },

    // add a friend by updating a particular user
    addFriend({ params }, res){
        User.findOneAndUpdate(
            { _id: params.id },
            { $push: { friends: params.friendId } },
            { new: true}
        )
        .then(dbUserData => {
            if (!dbUserData) {
              res.status(404).json({ message: 'No user found with this id!' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => res.json(err));
    },

    // remove friend by id
    deleteFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.id },
            { $pull: { friends: { friendId: params.friendId } } },
            { new: true }
        )
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
    },

};

module.exports = userController;