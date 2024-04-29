const express = require('express')
const router = express.Router()
const womenShoes = require("../models/womenShoes");
const mongoose = require('mongoose')

router.get("/", async (req, res) => {
    const shoes = await womenShoes.find();
    res.json(shoes);
})

router.get('/:id', async (req, res) => {
    const shoes = await womenShoes.findById(req.params.id);
    res.json(shoes);
})

module.exports = router;