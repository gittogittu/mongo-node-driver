var mongo = require("../mongo.js");

function runDemo() {
  mongo.db('node-test');
  mongo.run("\
  for( var i = 1; i < 100000; i++ ) \
    db.things.save( { x:4, j:i } ) \
  ");
  mongo.run("db.things.count()");
}

function onLoad() {
  setTimeout(runDemo, 1000);
}