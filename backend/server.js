const express = require("express")
const app = express()
const { Pool } = require('pg');
const bodyParser = require("body-parser")

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'dummydb',
    password: '',
    port: 5432
});

app.use(bodyParser.json)

// An endpoint to get all the form from the database
app.get("/form", function(req, res) {
    pool.query('SELECT * FROM form', (error, result) => {
        res.json(result.rows);
    });
});

// An endpoint to create a new form for the database
app.post("/form", function (req, res) {
    const petFinderName = req.body.name;
    const petFinderEmail = req.body.email;
    const petFinderPhoneNumber = req.body.phoneNumber;
    const newPetType = req.body.petType;
    const petRace = req.body.race;
    const petColor = req.body.color;
    const petLocation = req.body.location;
    const nameOfShelter = req.body.shelter;
    const locationOfShelter = req.body.shelterLocation;
  
    const query =
      "INSERT INTO forms (name, email, phoneNumber, petType, race, color, location, shelter, shelterLocation) VALUES ($1, $2, $3,$4, $5, $6, $7, $8, $9)";
  
    pool
      .query(query, [petFinderName, petFinderEmail, petFinderPhoneNumber, newPetType, petRace, petColor, petLocation, nameOfShelter, locationOfShelter])
      .then(() => res.send("Found lost pet form created!"))
      .catch((e) => console.error(e));
  });

  //an endpoint to get the form by color

  app.get("/form", function (req, res) {
    pool
      .query("SELECT * FROM form ORDER BY color")
      .then((result) => res.json(result.rows))
      .catch((e) => console.error(e));
  });

   //an endpoint to get the form by petType
  
   app.get("/form", function (req, res) {
    pool
      .query("SELECT * FROM form ORDER BY petType")
      .then((result) => res.json(result.rows))
      .catch((e) => console.error(e));
  });

   //an endpoint to get the form by race
  
   app.get("/form", function (req, res) {
    pool
      .query("SELECT * FROM form ORDER BY race")
      .then((result) => res.json(result.rows))
      .catch((e) => console.error(e));
  });

  //an endpoint that loads a specific form by ID

  app.get("/form/:formId", function (req, res) {
    const formId = req.params.formId;
  
    pool
      .query("SELECT * FROM form WHERE id=$1", [formId])
      .then((result) => res.json(result.rows))
      .catch((e) => console.error(e));
  });

  //An endpoint to update the form(the location of the pet)
  app.patch("/form/:formId", function (req, res) {
    const formId = req.params.formId;
    const petLocation = req.body.location;
  
    pool
      .query("UPDATE form SET location=$1 WHERE id=$2", [petLocation, formId])
      .then(() => res.send(`Form ${formId} updated!`))
      .catch((e) => console.error(e));
  });

  //An endpoint to delete form by ID

  app.delete("/form/:formId", function (req, res) {
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

app.set("view engine", "ejs")

app.get('/upload', (req, res) => {
    res.render("upload")
    
      });
app.post('/upload', upload.single('image'), (req, res) => {
    res.send("Image Uploaded")
    
      });


/*//the second image endpoint
const multer = require('multer');
import morgan from 'morgan';
import express from 'express';
const path = require('path')
const multer = require('multer');
const upload = multer({storage: storage});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use(express.static(__dirname, 'public'));

const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, 'images');
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + path.extname(file.originalname));
  }
});

app.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
      console.log("No file received");
      return res.send({
        success: false
      });
  
    } else {
      console.log('file received');
      return res.send({
        success: true
      })
    }
  });
  */



app.listen(3000, function(){
    console.log("Server is listerning on port 3000. Ready to accept requests!");
})