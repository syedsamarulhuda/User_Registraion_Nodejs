
var mongoose= require('mongoose');

var dbConfig = config.get('MongoDatabaseSettings');

var mongoString= dbConfig.host+dbConfig.port+"/"+dbConfig.database;

mongoose.connect(mongoString);

var db= mongoose.connection;

var userDetailSchema=mongoose.Schema(
{
	username:{
              
              type:String,
              required:true

	},
	password:{
              
              type:String,
              required:true
	},
	create_date:{

		type:Date,
             default:Date.now

	}

});


var UserDetails=module.exports=mongoose.model('user_details',userDetailSchema);