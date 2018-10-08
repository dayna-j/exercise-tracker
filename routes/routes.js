const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const shortid = require('shortid');
const mongodb = require('mongodb');

shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');
const log = msg => console.log(msg);
// should be an array of objects.  username:  name, userID: id
let users = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get('/api/exercise/users' , (req,res) => {
    res.send(users);
});

router.get('/api/exercise/log/:id', (req,res) => {
    res.end('end');
});

router.post('/api/exercise/new-user', (req,res) => {
    let username = req.body.username;
    let userObj = {
        username: username,
        _id: shortid.generate()
    }
    users.push(userObj);
    res.end(JSON.stringify(userObj));
});

router.post('/api/exercise/add', (req,res) => {
    res.end('end');
});

module.exports = router;


