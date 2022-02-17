// import
const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// function to make sure email input matches the outline of any email address
function emailIsReal (email) {
    const regex = `/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/`;
    return regex.test(email);
}

// create new schema
const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
          email: {
            type: String,
            unique: true,
            required: true,
            validate: [emailIsReal, 'Must enter a valid email address']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
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

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// create the User model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;
