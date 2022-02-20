const router = require('express').Router();

// import all api routes from /api/index.js
const apiRoutes = require('./api');

// add /api to all of the api routes
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>Error!</h1>');
});

module.exports = router;