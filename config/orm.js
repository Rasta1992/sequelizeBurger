var connection = require("./connection.js");

// ORM //

var orm = {
	all: function(tableInput, cb) {
		connection.query("SELECT * FROM "+tableInput+";", function(err, result){
			if(err) throw err;
			cb(result);
		})
	},	

	update: function(tableInput, condition, cb) {
		connection.query("UPDATE "+tableInput+ "SET devoured=true WHERE id="+condition+ ";",function(err, result){
			console.log(result);
			if(err) throw err;
			cb(result);

		})
	},	
	create: function(tableInput, val, result) {
		connection.query("INSERT INTO"+tableInput+" (burger_name) VALUES ("+val+");", function(err, result){
			console.log(result);
			if(err) throw err;
			cb(result);
		})
	}




}

module.exports = orm;