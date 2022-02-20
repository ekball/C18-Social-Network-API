const router = require('express').Router();
const {
    getAllThoughts,
    getSingleThought,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// create thoughts through the user id at /api/thoughts/<userId>
router
    .route('/:userId')
    .get(getAllThoughts);

// delete thoughts through the user id at /api/thoughts/:userId/:thoughtId
// add reactions through the Thought id at /api/thoughts/:userId/:thoughtId
router
    .route('/:thoughtId')
    .get(getSingleThought)
    .post(addThought)
    .put(updateThought)
    // .put(addReaction)
    .delete(deleteThought);

// delete reactions through the reaction id (created above)
router
    .route('/:reactionId')
    .delete(deleteReaction);

module.exports = router;
