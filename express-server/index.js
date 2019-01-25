const express = require("express")
const path = require('path');
const parser = require('body-parser')
const PORT = 3000;
const routes = require("./routes.js");

const app = express();
// const requestHandler = require("./handler.js");
// const ip = "127.0.0.1";

app.use(parser.json()); //takes the incoming request and turns it into a json object
app.use(parser.urlencoded({extended: true})); 
app.use(express.static(path.resolve(__dirname, "../static"))); //prints out the absolute path 


app.use('/api', routes);




app.listen(PORT, ()=> {return console.log('App is listening to PORT: ', PORT)});
// const server = http.createServer(requestHandler);

// server.listen(PORT);