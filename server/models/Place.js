const mongoose = require('mongoose');
const { Schema } = mongoose;

const PlaceSchema = new Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    photos: {
        type: [String],
        required: true,
    },
    amenities: {
        type: [String],
        required: true,
    },
    extraInfo: {
        type: String
    },
    checkIn: {
        type: Date,
    },
    checkOut: {
        type: Date,
    },
    maxGuests: {
        type: Number,
    },
    price: {
        type: Number,
        required: true
    },
});

const PlaceModel = mongoose.model('Place', PlaceSchema);

module.exports = PlaceModel;
