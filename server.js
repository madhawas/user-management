const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

const mongoUrl = process.env.MONGODB_URL;

mongoose.connect(mongoUrl, {
    useUreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false

})