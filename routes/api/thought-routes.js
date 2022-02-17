const router = require('express').Router();
const {
    addThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// create thoughts through the user id
router.route('/:userId').post(addThought);

// delete thoughts through the user id
// add reactions through the Thought id
router
    .route('/:userId/:thoughtId')
    .put(addReaction)
    .delete(deleteThought);

// delete reactions through the reaction id
router.route('/:userId/:thoughtId/:reactionId').delete(deleteReaction);

module.exports = router;
