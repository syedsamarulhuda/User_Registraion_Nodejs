

var express= require('express');
var app=express();
var bodyParser=require('body-parser');
var mongoose= require('mongoose');


app.use(bodyParser.json());

UserDetails=require('./models/user_details');

//connect to mongo

mongoose.connect('mongodb://localhost:27017/test_app');
var db= mongoose.connection;

app.get('/',function(req,res){

res.send('Testing Node js Skill');

});


//get all user details

app.get('/api/user_detail',function(req,res){

    UserDetails.getUsersDetail(function(err,userDetails)
    {
    	if(err)
    	{
    		throw err;
    	}

    	res.json(userDetails);
    })


});

// get user detail by id

app.get('/api/user_detail/:_id',function(req,res){

    UserDetails.getUserDetailById(req.params._id,function(err,userDetail)
    {
    	if(err)
    	{
    		throw err;
    	}

    	res.json(userDetail);
    })


});

// create user
app.post('/api/user_detail',function(req,res){

	var user_detail= req.body;

    UserDetails.addUserDetail(user_detail,function(err,user_detail)
    {
    	if(err)
    	{
    		throw err;
    	}

    	res.json(user_detail);
    })


});

// update user
app.put('/api/user_detail/:_id',function(req,res){

	var id = req.params._id;

	var user_detail= req.body;

    UserDetails.updateUserDetail(id,user_detail,{},function(err,user_detail)
    {
    	if(err)
    	{
    		throw err;
    	}

    	res.json(user_detail);
    })


});

// delete user
app.delete('/api/user_detail/:_id',function(req,res){

	var id = req.params._id;

    UserDetails.deleteUserDetail(id,function(err,user_detail)
    {
    	if(err)
    	{
    		throw err;
    	}

    	res.json(user_detail);
    })


});


app.listen(8080);
console.log("Running port 8080...");
