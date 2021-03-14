const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Course = new Schema({
    name: { type: String, require: true},
    description: { type: String, require: true},
    image: { type: String},
    videoId: { type: String},
    level: { type: String},

}, {
    timestamps: true,
})

module.exports = mongoose.model('Course', Course)