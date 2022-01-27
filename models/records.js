const { string, number } = require('joi');
const Joi = require('joi');
const mongoose = require('mongoose');

const Record = mongoose.model('Record', new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    key: String,
    value: String,
    createdAt: Date,
    counts: Array
        // required: true,
        // min: 0,
        // max: 255
}));

// function validateMovie(movie) {
//     const schema = {
//         title: Joi.string().min(5).max(50).required(),
//         genreId: Joi.objectId().required(),
//         numberInStock: Joi.number().min(0).required(),
//         dailyRentalRate: Joi.number().min(0).required()
//     };

//     return Joi.validate(movie, schema);
// }

exports.Record = Record;
// exports.validate = validateMovie;