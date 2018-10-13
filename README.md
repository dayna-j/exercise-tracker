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

GET   ../api/exercise/users retrieves a complete list of users in the database.

      ex: curl {url}/api/exercise/users

GET   ../api/exercise/log/:id queries the database by userId and returns the appropriate user.
      
      where :id is a route parameter representing the userId of a user in the database
      
      ex: curl {url}/api/exercise/log/sfA2DaF4

POST  ../api/exercise/new-user creates a new user in the database.
      
      This route has 1 required parameter; username
      
      username is the name of the user in the database.      
      
      ex: curl --username=dayna {url}/api/exercise/new-user
      
POST  ../api/exercise/add updates an existing user in the database with new exercise data

      This route has 3 required parameters; userId, description, duration
      
      userId is a unique identifier for each account
      description is a description of the exercise performed
      duration is represents the amount of time, in minutes, that the exercise was performed
      
      This route has 1 optional parameter; date
      
      date represents the date that the exercise was performed on.
      If not supplied by the user, the server will automatically include the current time.
      
      ex curl --data userId=sfA2DaF4 --data description=Situps --data duration=15 --data date==2018-10-13 {url}/api/exercise/add
