const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const shortid = require('shortid');
const mongodb = require('mongodb');
// User model for mongo database

const User = require('../model/User.js')

shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');
const log = msg => console.log(msg);
// should be an array of objects.  username:  name, userID: id
// let users = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get('/api/exercise/users' , (req,res) => {
    // retrieve all users from database
    // No query passed in means "find everything"
    User.find()
        .then(users => res.json(items))
        .catch(err => log(err))
});

router.get('/api/exercise/log/:id', (req,res) => {
    res.end('end');
});

router.post('/api/exercise/new-user', (req,res) => {
    // get the user name from the form
    const username = req.body.username;
    const query = User.where({username: username});
    
    query.findOne( (err,user) => {
        if (err) return err;
        if (user) {
        // if the username is already in the database...
            console.log(user);
        } else {
            // add username to database
            let user = new User({username:username});
            user.save(err => log(err))
        }

    });  
    
    // check whether username already exists.  If so, return.  If not,
    // add username to database

    // User.findOne({username});
    


    // let userObj = {
    //     username: username,
    //     _id: shortid.generate()
    // }
    
    // users.push(userObj);
    // res.end(JSON.stringify(userObj));


});

router.post('/api/exercise/add', (req,res) => {
    res.end('end');
});

module.exports = router;


