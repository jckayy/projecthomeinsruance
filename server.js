var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 5000;

var app = express();

app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: true }));


app.use(bodyParser.json());


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/insurance.js");
var homeassetsroutes = require("./controllers/homeassets.js");

app.use(routes);
app.use(homeassetsroutes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
