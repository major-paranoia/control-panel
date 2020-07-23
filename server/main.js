const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

const articles = require('./routes/api/articles');
const categories = require('./routes/api/categories');
const images = require('./routes/api/images');
const trash = require('./routes/api/trash');

app.use('/api/articles', articles);
app.use('/api/categories', categories);
app.use('/api/images', images);
app.use('/api/trash', trash);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(__dirname + '/public/'));
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listens on port ${PORT}`));