var express = require("express");
var todoController = require("./controllers/todoController");
var app = express();

//set up template engine
app.set("view engine", "ejs");

//statc files
app.use(express.static("./static"));

//trigger controllers
todoController(app);

//listen to port
let port = process.env.PORT;

if (port == null || port == "") {

	port = 8000;
}

app.listen(port);
console.log("You are listening to port HEROKU");