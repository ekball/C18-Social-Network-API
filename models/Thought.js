// import
const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// create new schema
const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min: [1, 'Must be between 1 and 280 characters'],
            max: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: true
        },
        reactions: [
            // create new reactions
                {
                    reactionId: {
                        type: Schema.Types.ObjectId,
                        default: () => new Types.ObjectId(),
                    },
                    reactionBody: {
                        type: String,
                        required: true,
                        max: 280
                    },
                    username: {
                        type: String,
                        required: true
                        },
                    createdAt: {
                        type: Date,
                        default: Date.now,
                        get: createdAtVal => dateFormat(createdAtVal)
                    }
                    
                }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false
    }
);

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// create the Thought model using the ThoughtSchema
const Thought = model('Thought', ThoughtSchema);

// export the Thought model
module.exports = Thought;
