const express = require("express");
const app = express();

/*app.get('/', (req , res) =>{
    res.send("Hello Team 5 ")
});
//app listen
app.listen(3000, ()=> console.log("server is up and running "))*/

/** Week 3 - Node */
const cors = require("cors");

const user = require("./routes/user");

// initializing express application

// parse rewuest of content-type - application/json
app.use(express.json());

const corsOptions = {
    origin: "http://localhost:3000"
};
app.use(cors(corsOptions)); // enable CORS

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome Team 5"});
});
app.use("/user", user);
// set port, listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});
