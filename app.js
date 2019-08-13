const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');//{middleware} Parses incoming request body
const cors = require('cors');//{middleware} Allows for making a request to an API from outside domain names
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//Connect to database
mongoose.connect(config.database);

//On connecton
mongoose.connection.on('connected' , () => {
    console.log("Connected to database " + config.database);
});

//On error
mongoose.connection.on('error' , (err) => {
    console.log("Database error " + err);
});

const app = express();

const users = require('./routes/users');

//Port number
const port = 3000;

//CORS middleware
app.use(cors());

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Body parser middleware
app.use(bodyParser.json());

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users' , users);

//Index Route
app.get('/' , (req , res) => {
    res.send("Invalid endpoint 139");
});

//Server listening on port {3000 in this case}
app.listen(port , () => {
    console.log("Server started on port " + port); 
});