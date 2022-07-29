const express = require("express");
const app = express();
const cors = require("cors");

const user = require("./routes/user");
const report = require("./routes/report");

// initializing express application

// parse request of content-type - application/json
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
app.use("/pet", report);

// set port, listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});
