

var express = require('express');
var router = express.Router();
var sendResponse = require('./sendResponse');

UserDetails=require('../models/user_details');
/*
*  get all user details
*/

router.get('/api/user_detail',function(req,res){
   
      UserDetails.getUsersDetail(function(err,userDetails)
     {
    	if(err)
    	{
    		throw err;

    	}
          sendResponse.sendSuccessData(userDetails,res);
    })

});




// get user detail by id

router.get('/api/user_detail/:_id',function(req,res){

    UserDetails.getUserDetailById(req.params._id,function(err,userDetail)
    {
    	if(err)
    	{
    		throw err;
    	}

    	sendResponse.sendSuccessData(userDetail,res);
    })


});


// create user

router.post('/api/user_detail',function(req,res){

	var user_detail= req.body;

    UserDetails.addUserDetail(user_detail,function(err,user_detail)
    {
    	if(err)
    	{
    		throw err;
    	}

    	sendResponse.sendSuccessData(user_detail,res);
    })


});

// update user

router.put('/api/user_detail/:_id',function(req,res){

	var id = req.params._id;

	var user_detail= req.body;

    UserDetails.updateUserDetail(id,user_detail,{},function(err,user_detail)
    {
    	if(err)
    	{
    		throw err;
    	}

    	sendResponse.sendSuccessData(user_detail,res);
    })


});


// delete user

router.delete('/api/user_detail/:_id',function(req,res){

	var id = req.params._id;

    UserDetails.deleteUserDetail(id,function(err,user_detail)
    {
    	if(err)
    	{
    		throw err;
    	}

    	sendResponse.sendSuccessData(user_detail,res);
    })


});




module.exports = router;