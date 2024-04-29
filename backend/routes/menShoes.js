const express = require('express')
const router = express.Router()
const Menshoes = require("../models/menShoes")


router.get("/", async (req, res) => {
    const shoes = await Menshoes.find();
    res.json(shoes);
})

router.get('/:id', async (req, res) => {
    const shoes = await Menshoes.findById(req.params.id);
    res.json(shoes);
})


module.exports = router;