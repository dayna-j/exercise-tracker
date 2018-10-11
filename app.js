// packages
const express = require('express');
const app = express();

const mongoose = require('mongoose');

const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();

const db = process.env.MONGO_URL;
const port = process.env.PORT || 3000;
const log = msg => console.log(msg);

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('./routes/routes.js'))
app.use('/', express.static(process.cwd() + '/view'));

// serve static assets
app.get('/', (req,res) => {
    res.sendFile(process.cwd() + '/view/index.html');
});

mongoose.connect(db, { useNewUrlParser: true } )
    .then(log('Connected to mongo server..'))
    .catch(err=>log(err))

app.listen(port, () => console.log(`server started on port ${port}`));