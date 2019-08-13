# MEAN-back-end-part-two
MEAN stack user authentication app with encryption and token

#Start node server
cd into project directory and use command #'nodemon'
Note: npm install -g nodemon

#Start mongoDB service
command 'mongo' in any directory to begin the service

#Postman Commands for testing
-POST http://localhost:3000/users/register
    Headers
        key: Content-Type
        value: application/json
    Body
        raw (radio button)
        {
            "name": "John Doe",
            "email": "john@gmail.com",
            "username": "john",
            "password": "123456"
        }

-POST http://localhost:3000/users/authenticate
    Headers
        key: Content-Type
        value: application/json
    Body
        raw (radio button)
        {
            "username": "john",
            "password": "123456"
        }

-GET http://localhost:3000/users/profile
    Headers
        key: Authorization
        value: past the token value from the the authenticate response
    Body
        none (radio button)