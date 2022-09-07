const express = require("express");
const cors = require("cors");
const path = require("path");
const multer = require("multer");

const user = require("./routes/user");
const report = require("./routes/report");

// initializing express application
const app = express();

// parse request of content-type - application/json
app.use(express.json());
const corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions)); // enable CORS
var dir = path.join(__dirname, "Images");

app.use(express.static(dir));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome Team 5" });
});
app.use("/user", user);
app.use("/pet", report);

const pg = require("pg");
//const bodyParser = require("body-parser")




const pool = new pg.Client({connectionString:process.env.DB_URL, ssl: { rejectUnauthorized: false }});



pool.connect();

// parse requests of content-type - application/json
app.use(express.json());
app.use(cors(corsOptions)); // enable CORS

//app.use(bodyParser.json)

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to MigraCode Auth application." });
});

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./Images");
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

// An endpoint to get all the form from the database
app.get("/pet_report", function (req, res) {
  pool.query("SELECT * FROM pet_report", (error, result) => {
    res.json(result.rows);
  });
  //res.json({Message:".test"})
});
/*{
  "userName": "5";
  "shelterName": "8";
  "race": "jis";
  "color": "black";
  "type": "cat";
}*/


// An endpoint to create a new form for the database(Usman)
app.post("/pet_report", upload.single("image"), function (req, res) {
  const user = req.body.userName;
  const shelter = req.body.shelterName;
  const petRace = req.body.race;
  const petColor = req.body.color;
  const petImage = req.file.filename;
  const petType = req.body.type;
  //const phoneNumber = req.body.phonenumber
  const query =
    "INSERT INTO pet_report (userName, shelterName, race, color,image, type) VALUES ($1, $2, $3,$4, $5, $6)";

  pool
    .query(query, [user, shelter, petRace, petColor, petImage, petType])
    .then(() => res.send("Found lost pet form created!"))
    .catch((e) => console.error(e));
});

//an endpoint to get the form by color
app.get("/pet_report/color/:pet_reportColor", function (req, res) {
  const petReportColor = req.params.pet_reportColor;

  pool
    .query(`SELECT * FROM pet_report WHERE color = '${petReportColor}'`)
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});

//an endpoint to get the form by petType

app.get("/pet_report/type/:pet_reportType", function (req, res) {
  const petReportType = req.params.pet_reportType;

  pool
    .query(`SELECT * FROM pet_report WHERE type = '${petReportType}'`)
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});

//an endpoint to get the form by race

app.get("/pet_report/race/:pet_reportRace", function (req, res) {
  const petReportRace = req.params.pet_reportRace;

  pool
    .query(`SELECT * FROM pet_report WHERE race = '${petReportRace}'`)
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});

//an endpoint that loads a specific form by ID
app.get("/pet_report/:pet_reportId", function (req, res) {
  const petReportId = req.params.pet_reportId;

  pool
    .query("SELECT * FROM pet_report WHERE id=$1", [petReportId])
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});

//An endpoint to update the form(the location of the pet)
app.patch("/pet_report/:pet_reportId", function (req, res) {
  const pet_reportId = req.params.pet_reportId;
  const petLocation = req.body.shelter;

  pool
    .query("UPDATE pet_report SET shelter=$1 WHERE id=$2", [
      petLocation,
      pet_reportId,
    ])
    .then(() => res.send(`Form ${pet_reportId} updated!`))
    .catch((e) => console.error(e));
});
//An endpoint to delete form by ID
app.delete("/pet_report/:pet_reportId", function (req, res) {
  const pet_reportId = req.params.pet_reportId;

  pool
    .query("DELETE FROM pet_report WHERE id=$1", [pet_reportId])
    .then(() => res.send(`Form ${pet_reportId} deleted!`))
    .catch((e) => console.error(e));
});

// The endpoint for uploading images

app.post("/multi-upload", upload.array("images", 3), (req, res) => {
  console.log(req.files);
  res.send("Images Uploaded");
});
// set port, listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
