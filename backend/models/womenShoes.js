const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const womenShoesSchema = new Schema({
    name: { type: String },
    price: { type: Number },
    description: { type: String },
    image: { type: String },
    thumbnails: [{ type: String }]
})

const womenShoes = mongoose.model('womenShoes', womenShoesSchema);

module.exports = womenShoes;