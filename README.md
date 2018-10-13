# exercise-tracker

Live project link:  https://exercise-tracking.herokuapp.com/

exercise-tracker is a full stack JavaScript application built with Node, Express & MongoDB.  It uses Mongoose for data modeling.
I have built exercise-tracker to conform to the MVC design pattern.  It features a modular routing scheme, made possible by
Express' Router object.  

exercise-tracker can be utilized in 2 different ways:

1)  Through the user interface provided at the live project link above.
2)  Through its restful API.

### restFUL API route map:

* GET   /api/exercise/users
* GET   /api/exercise/log/:id
* POST  /api/exercise/new-user
* POST  /api/exercise/add

------------------------------------------------------------------------

GET ../api/exercise/users retrieves a complete list of users in the database.

GET   ../api/exercise/log/:id queries the database by userId and returns the appropriate user.

POST  ../api/exercise/new-user creates a new user in the database.

POST  ../api/exercise/add
