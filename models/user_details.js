


var UserDetails= require('./user_detail_model.js');

//get users detail

module.exports.getUsersDetail=function(callback,limit)
{
	UserDetails.find(callback).limit(limit);
}


//get user detail

module.exports.getUserDetailById=function(id,callback)
{
	UserDetails.findById(id,callback);
}

// Add New user

module.exports.addUserDetail=function(user_detail,callback)
{
	UserDetails.create(user_detail,callback);
}

// Add Update User

module.exports.updateUserDetail=function(id,user_detail,options,callback)
{
	var query={_id:id};
	var update={
		
		name:user_detail.username,

		password:user_detail.password
	}
	UserDetails.findOneAndUpdate(query, update, options, callback);
}


// Add Delete User

module.exports.deleteUserDetail=function(id,callback)
{
	var query={_id:id};

	UserDetails.remove(query, callback);
}







