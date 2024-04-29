const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MenShoesSchema = new Schema({
    name: { type: String },
    price: { type: Number },
    description: { type: String },
    image: { type: String },
    thumbnails: [{ type: String }]
})

const MenShoes = mongoose.model('MenShoes', MenShoesSchema);

module.exports = MenShoes;