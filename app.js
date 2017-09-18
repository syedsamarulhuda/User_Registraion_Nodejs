

process.env.NODE_ENV = 'dbConfigDevelopment';

var express= require('express');
var app=express();

config = require('config');
constant = require('./routes/constant');
var user = require('./routes/user');
var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.set('json spaces', 1);



//get all user details

app.get('/api/user_detail',user);

// get user detail by id

app.get('/api/user_detail/:_id',user);

// create user
app.post('/api/user_detail',user);


// update user
app.put('/api/user_detail/:_id',user);

// delete user
app.delete('/api/user_detail/:_id',user);


app.listen(8080);
console.log("Running port 8080...");
