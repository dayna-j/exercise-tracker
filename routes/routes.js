const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const shortid = require('shortid');
// const mongodb = require('mongodb');
// User model for mongo database

const User = require('../model/User.js')

shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');
const log = msg => console.log(msg);
// should be an array of objects.  username:  name, userID: id
// let users = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get('/api/exercise/users' , (req,res) => {
    // WORKING
    // retrieve all users from database
    // No query passed in means "find everything"
    User.find()
        .then(users => res.json(users))
        .catch(err => log(err))
});

router.get('/api/exercise/log/:id', (req,res) => {
    const userId = req.params.id;
    const query = User.where({userId: userId})
    query.findOne( (err,user) => {
        if (err) return err;
        if (user.exercises) {
            res.json(user.exercises);
        } else {
            res.end('user not found / user has not logged any exercise');
        }
    });
    
    
    // res.end('end');
});

router.post('/api/exercise/new-user', (req,res) => {
    // WORKING
    // get the user name from the form
    const username = req.body.username;
    const query = User.where({username});
    
    query.findOne( (err,user) => {
        if (err) return err;
        if (user == null) {
            // user wasn't found.  Add to database
            let user = new User({username});
            user.save((user=>log(`user ${username} saved to database.`)));
        } else {
            log(`username: ${user.username} is already in the database`);
            res.json(user);
        }        
    });  
});

router.post('/api/exercise/add', (req,res) => {
    let userId = req.params.userId;
    let description = req.params.description;
    let duration = req.params.duration;
    let date = req.params.date;
    
    res.end('end');

});

module.exports = router;


