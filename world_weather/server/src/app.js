const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

const PORT = process.env.PORT || 8081;

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

app.listen(PORT);

app.get('/status', (req, res) => {
    res.send({
        message: 'hello world!'
    })
})