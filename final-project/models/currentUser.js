const mongoose = require('mongoose');

const currentUserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
});

const CurrentUser = mongoose.model('CurrentUser', currentUserSchema);

module.exports = CurrentUser;
