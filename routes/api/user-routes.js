const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
  } = require('../../controllers/user-controller');


// GET all users and POST user at /api/users
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// GET single user, PUT user, and DELETE user at /api/users/:userId
// POST friend at /api/users/:userId (creates friends and friendId)
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser)
  .post(addFriend);

// DELETE friends at /api/users/:userId/friends/:friendId
router
  .route('/friends/:friendId')
  .delete(deleteFriend);

module.exports = router;