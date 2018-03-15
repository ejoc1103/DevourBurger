// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "jawsdb-contoured-89649",
  user: "b2fec46726d6bc",
  password: "d439430ed",
  database: "heroku_d838a32fd43d"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;