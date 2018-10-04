const express = require('express');
const app = express();
const cors = require('cors');

const log = msg => console.log(msg);
const log = msg => console.log(msg);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/view', express.static(process.cwd() + '/view'));
