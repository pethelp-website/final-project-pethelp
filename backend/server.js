const express = require("express");
const app = express();

app.get('/', (req , res) =>{
    res.send("Hello Team 5 ")
});
//app listen
app.listen(3000, ()=> console.log("server is up and running "))