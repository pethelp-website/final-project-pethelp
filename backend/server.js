const express = require("express");
const cors = require("cors");
const { Pool } = require('pg');
//const bodyParser = require("body-parser")

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'PT-db',
  password: 'Generations39',
  port: 5432
});

pool.connect()



// initializing express application
const app = express();


// parse requests of content-type - application/json
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));  // enable CORS

//app.use(bodyParser.json)

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to MigraCode Auth application." });
});





// An endpoint to get all the form from the database
app.get("/form", function(req, res) {
    pool.query('SELECT * FROM form', (error, result) => {
        res.json(result.rows);
    });
   //res.json({Message:".test"})
});




/*// An endpoint to create a new form for the database
app.post("/form", function (req, res) {
    const petFinderName = req.body.name;
    const petFinderEmail = req.body.email;
    const petFinderPhoneNumber = req.body.phoneNumber;
    const petFinderPostcode = req.body.postCode;
    const newPetType = req.body.petType;
    const petRace = req.body.race;
    const petColor = req.body.color;
    const petLocation = req.body.location;
    const nameOfShelter = req.body.shelter;
    const locationOfShelter = req.body.shelterLocation;
  
    const query =
      "INSERT INTO forms (name, email, phoneNumber,postCode, petType, race, color, location, shelter, shelterLocation) VALUES ($1, $2, $3,$4, $5, $6, $7, $8, $9, $10)";
  
    pool
      .query(query, [petFinderName, petFinderEmail, petFinderPhoneNumber,petFinderPostcode, newPetType, petRace, petColor, petLocation, nameOfShelter, locationOfShelter])
      .then(() => res.send("Found lost pet form created!"))
      .catch((e) => console.error(e));
  });*/

  // An endpoint to create a new form for the database(Usman)
app.post("/pet_report", function (req, res) {
  const user = req.body.user_id;
  const shelter = req.body.shelter_id;
  const petRace = req.body.race;
  const petColor = req.body.color;
  const petType = req.body.type;

  const query =
    "INSERT INTO forms (user_id, shelter_id, race, color, petType) VALUES ($1, $2, $3,$4, $5)";

  pool
    .query(query, [user, shelter, petRace, petColor, petType, ])
    .then(() => res.send("Found lost pet form created!"))
    .catch((e) => console.error(e));
});

  //an endpoint to get the form by color

  app.get("/pet_report", function (req, res) {
    pool
      .query("SELECT * FROM form ORDER BY color")
      .then((result) => res.json(result.rows))
      .catch((e) => console.error(e));
  });

   //an endpoint to get the form by petType
  
   app.get("/pet_report", function (req, res) {
    pool
      .query("SELECT * FROM form ORDER BY petType")
      .then((result) => res.json(result.rows))
      .catch((e) => console.error(e));
  });

   //an endpoint to get the form by race
  
   app.get("/pet_report", function (req, res) {
    pool
      .query("SELECT * FROM form ORDER BY race")
      .then((result) => res.json(result.rows))
      .catch((e) => console.error(e));
  });

  //an endpoint that loads a specific form by ID

  app.get("/pet_report/:pet_reportId", function (req, res) {
    const formId = req.params.formId;
  
    pool
      .query("SELECT * FROM form WHERE id=$1", [formId])
      .then((result) => res.json(result.rows))
      .catch((e) => console.error(e));
  });

  //An endpoint to update the form(the location of the pet)
  app.patch("/pet_report/:pet_reportId", function (req, res) {
    const formId = req.params.formId;
    const petLocation = req.body.location;
  
    pool
      .query("UPDATE form SET location=$1 WHERE id=$2", [petLocation, formId])
      .then(() => res.send(`Form ${formId} updated!`))
      .catch((e) => console.error(e));
  });

  //An endpoint to delete form by ID

  app.delete("/pet_report/:pet_reportId", function (req, res) {
    const formId = req.params.formId;
  
    pool
      .query("DELETE FROM form WHERE id=$1", [formId])
      .then(() => res.send(`Form ${formId} deleted!`))
      .catch((e) => console.error(e));
  });

  // The endpoint for uploading images
const path = require('path')
const multer = require('multer');



const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'Images');
  },
  filename:  (req, file, callback) => {
    callback(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({storage: storage});

app.get('/upload', (req, res) => {
    res.render("upload.html")
    
      });
app.post('/upload', upload.single('image'), (req, res) => {
    res.send("Image Uploaded")
    
      });


// set port, listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});



