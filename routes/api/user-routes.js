const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
  } = require('../../controllers/user-controller');


// GET all users and POST user at /api/users
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// GET single user, PUT user, and DELETE user at /api/users/:id
router
  .route('/:id')
  .get(getPizzaById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;