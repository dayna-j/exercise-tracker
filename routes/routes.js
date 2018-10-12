const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const shortid = require('shortid');
const mongoose = require('mongoose');
// User model for Mongo database
const User = require('../model/User.js')

shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');
const log = msg => console.log(msg);

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get('/api/exercise/users' , (req,res) => { // WORKING
    // retrieve all users from database
    // No query passed in means "find everything"
    User.find()
        .then(users => res.json(users))
        .catch(err => log(err))
});

router.get('/api/exercise/log/:id', (req,res) => {
    // :id is a route parameter.  it is attached to the request object as req.params.id
    const userId = req.params.id;
    const query = User.where({userId: userId})
    // const from, to;
    query.findOne( (err,user) => {
        if (err) return err;
        if (user && user.exercise.length > 0) {
            // user exists && there are exercises logged for this user
            // return exercise object as json
            res.json(user.exercise);
        } else if (user) {
            res.end('user has not logged any exercises');
        } else {
            res.end('user does not exist');
        }
    });
});

router.post('/api/exercise/new-user', (req,res) => {
    // WORKING (get the user name from the form)
    
    // body-parser populates the request object with a body object having properties 
    // which match the names of the input fields on the exercise form.
    const username = req.body.username;
    // create a mongo database query for users with user name matching 'username'
    const query = User.where({username});
    
    query.findOne( (err,user) => { // WORKING
        if (err) return err;
        if (user == null) {
            // user wasn't found.  
            // create a new user from the User model.  username is the only required path.
            let user = new User({username});
            // save user to database
            user.save((user=>log(`user ${username} saved to database.`)));
            // send user object back as json
            res.json(user);
        } else {
            log(`username: ${user.username} is already in the database`);
            // user already exists in database.  returns existing user object as json.
            res.json(user);
        }
    });
});

router.post('/api/exercise/add', (req,res) => {
    let userId = req.params.userId;
    let description = req.params.description;
    let duration = req.params.duration;
    let date = req.params.date;
    let dateRegex = /\d\d-\d\d-\d\d/g;

    // validate duration input
    if ( isNaN(duration) ) {
        // duration is not a number.  reject.
        res.end('duration must be a number.')

    } else if (dateRegex.test(date)) {
        // validated date field input
        const currentDate = new Date(date);

    } else {
        // invalid date input.  reject.
        res.end('Date invalid:  yy-mm-dd');
    }
    
    const query = User.where({userId});

    // ---------------
    query.findOne( (err,user) => {
        if (err) return err;
        if (user == null) {
            // user wasn't found.  return message saying user wasnt found
            res.end("User does not exist");
            // let user = new User({username});
            // user.save((user=>log(`user ${username} saved to database.`)));
        } else {
            // user found
            // construct exerciseObj
            log(`user ${user} found!`)
            
            const exerciseObj = {
                description,
                duration,
                currentDate
            }
        }        
    });  
    res.end('end');
});

module.exports = router;


