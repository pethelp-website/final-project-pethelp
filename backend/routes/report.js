const express = require("express");
const { Client } = require("pg");
const fs = require("fs"); // fs is node's inbuilt file system module used to manage files

const client = require("../utils/openConnection");
const report = express.Router(); // we create a new router using express's inbuilt Router method

// Post new report: /report
/**
 * 
 * Request body:
 * {
    "username": "username1", 
    "petType": "dog", 
    "petRace": "golden", 
    "petCoor": "yellow", 
    "location": "Barcelona", 
    "shelterName": "", 
    "description": "It's OK", 
    "photo": "img/pet1.jpg" 
}
 */
/*report.post("/report", async (req, res) => {
  const {
    username,
    petType,
    petRace,
    petCoor,
    location,
    shelterName,
    description,
    photo,
  } = req.body;

  try {
    let response = {
      status: "OK", // could be OK or KO
      description: "", // description of error
    };

    return res.status(201).send(response);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ status: "KO", description: error.message });
  }
});

// get report list
/**
 * Response:
 * {
    "status": "OK",
    "status_description": "",
    "userName": "username1",
    "userPhoneNumber": "666 66 66 66",
    "userEmail": "username@email.com",
    "petType": "dog",
    "petRace": "golden",
    "petColor": "yellow",
    "petLocation": "Barcelona",
    "shelterName": "",
    "description": "It's OK",
    "photo": "img/pet1.jpg"
}
 */
/*report.get("/report", async (req, res) => {
  try {
    let response = {
      status: "OK", // could be OK or KO
      status_description: "", // description of error
      petsReported: [
        {
          userName: "username1",
          userPhoneNumber: "666 66 66 66",
          userEmail: "username@email.com",
          petType: "dog",
          petRace: "golden",
          petColor: "yellow",
          petLocation: "Barcelona",
          shelterName: "",
          description: "It's OK",
          photo: "img/pet1.jpg",
        },
      ],
    };

    res.status(200).send(response);
    // if the user exist then we will compare the password provided by user with the hashed password we stored during user registration
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ status: "KO", status_description: error.message });
  }
});*/


module.exports = report; // we need to export this router to implement it inside our server.js file
