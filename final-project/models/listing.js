const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    image: {
        type: String,
    },
    review: {
        type: String,
    },
});

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enu: ['island', 'omg', 'beach', 'tiny home', 'bed & breakfast'],
        required: true,
    },
    host: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    address: {
        type: String,
        required: true,
    },
    datePosted: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    reviews: [reviewSchema],
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
