const router = require('express').Router();
const {
    addThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// create thoughts through the user id at /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// delete thoughts through the user id at /api/thoughts/:userId/:thoughtId
// add reactions through the Thought id at /api/thoughts/:userId/:thoughtId
router
    .route('/:userId/:thoughtId')
    .put(addReaction)
    .delete(deleteThought);

// delete reactions through the reaction id (created above)
router
    .route('/:userId/:thoughtId/:reactionId')
    .delete(deleteReaction);

module.exports = router;
