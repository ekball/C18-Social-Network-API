const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// add /users to user routes
router.use('/users', userRoutes);

// add /thoughts to thought routes
router.use('/thoughts', thoughtRoutes);

module.exports = router;