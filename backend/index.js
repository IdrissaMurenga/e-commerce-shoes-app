const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const menShoes = require("./routes/menShoes")
const womenShoes = require("./routes/womenShoes")

const app = express();

app.use(express.json());
app.use("/menshoes", menShoes);
app.use("/womenshoes", womenShoes);
const MONGO_URI = process.env.MONGODB_URI
mongoose.connect(MONGO_URI)
    .then(() => {
        const port = process.env.PORT
        app.listen(port, () => console.log(`listening on port ${port}...`));
    })
    .catch(err => console.log(err));

