var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
// app.use(express.static, "app")
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// var apiroutes = require("/routes/apiRoutes")(app);
// app.use(apiroutes);
// var htmlroutes= require("/routes/htmlRoutes")(app);
// app.use(htmlroutes)

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  