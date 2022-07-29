const mongoose = require('mongoose');

const schema = mongoose.Schema;

var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new schema({
    password: {
        type: String,
        required: true,
        minlength: 3
    },

    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    conn_id:{
        type: String,
        required: true,
        minlength: 3
    },
    role:{
        type: String,
        required: true,
        minlength: 3
    }

    },
    {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;