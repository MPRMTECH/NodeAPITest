//importing node framework
const express = require(‘express’);
 
const app = express();
const PORT = 3000;
//Respond with "hello world" for requests that hit our root "/"
app.get(‘/’, function (req, res) {
 res.send(‘hello world’);
});
//listen to port 3000 by default
app.listen(PORT, () =>
          console.log("Server is Guru running ")
);
 
module.exports = app;
