const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ordenesSchema = new Schema({
    fecha: {
        type: Date,
        required: true,
    },
    ciudad: {
        type: String,
        required: true,
    },
    dentrega: {
        type: Number,
        min: 868,
        required: true,
    },
    estado: {
        type: Number,
        min: 868,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId, ref: 'User'
    }

}, {
    collection: 'ordenes'
})

module.exports = mongoose.model('Ordenes', ordenesSchema)