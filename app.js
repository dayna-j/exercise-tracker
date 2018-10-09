// packages
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();


const port = process.env.PORT || 3000;
const log = msg => console.log(msg);
const db = process.env.MONGO_URL;
log(db);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('./routes/routes.js'))

app.use('/', express.static(process.cwd() + '/view'));
// log(routes);
app.get('/', (req,res) => {
    res.sendFile(process.cwd() + '/view/index.html');
});

app.listen(port, () => console.log(`server started on port ${port}`));