
//add mongodb stuff 
var mongo = require('mongodb');
var monk = require('monk');
console.log('required libraries loaded');

//var db = monk('uikk5d647037.infiniteprairie.koding.io:27107/nodetest1');
var db = monk('127.0.0.1:27107/nodetest1');
console.log('db loaded: ' + db);


var collection = db.get('usercollection');
//collection.find({}, {}, function(e, docs) {
	// do something with docs
//});

// non-callback approach
var docs = collection.find({}, {});
console.log(docs);

