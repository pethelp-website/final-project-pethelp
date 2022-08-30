const express = require("express");
const { Client } = require("pg");
const bcrypt = require("bcrypt"); // bcrypt is used to hash password before saving it to database
const fs = require("fs"); // fs is node's inbuilt file system module used to manage files

const generateJWT = require("./generateJWT");
const client = require("../utils/openConnection");
const generateFakeJWT = require("./generateJWT");

const router = express.Router(); // we create a new router using express's inbuilt Router method

const INSERT_QUERY =
  "INSERT INTO users (name, email, address, city, postcode, password) VALUES($1, $2, $3, $4, $5, $6)";
const SELECT_QUERY = "SELECT * from users WHERE (email=$1)";

const clientDB = new Client(client());

require("dotenv").config(); // here we use dotenv module which we installed in the begining to access environment variables from .env file

// Creates a data base connection with info containing in env
const connectionData = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};
const client1 = new Client(connectionData);

client1.connect();

const select = (email) => {
  client1.query(SELECT_QUERY, [email], (error, response) => {
    if (error) {
      console.log("Something went wrong. " + error);
      return "KO";
    }
    console.log(response.rows);
    return response.rows;
  });
};

// user registration / sign-up
router.post("/sign-up", async (req, res) => {
  const { name, email, address, city, postcode, password } = req.body;
  console.log("en signup");

  try {
    const user = "";
    
    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);

    // Check user don't exists
    client1.query(SELECT_QUERY, [email], (error, response) => {
      if (error) {
        console.log("Something went wrong. " + error);
        
      }
      console.log("length",response.rows.length);
      if (response.rows.length > 0) {
        
        return res.status(400).json({ error: "User already exist!" });
      } else {

       
    
        // we add newUser to usersDb
        client1.query(
          INSERT_QUERY,
          [name, email, address, city, postcode, bcryptPassword],
          (error, response) => {
            if (error) {
              console.log("Something went wrong" + error);
              
            }
            if (response) {
              console.log(response);
                  
              const jwtToken = generateJWT(email);
    
              return res
                .status(201)
                .send({ jwtToken: jwtToken, isAuthenticated: true });
            }
            
          }
        );
      }
      
    });

    
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ error: error.message });
  }
});

// user sign-in / login
router.post("/sign-in", async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log("email",email);
    client1.query(SELECT_QUERY, [email], (error, response)=> {
        //console.log("query",query);
        if (error) {
          console.log("Something went wrong" + error);
          res.status(404).json({error: "Invalid Credential", isAuthenticated: false}); 
        }
        //res.json(response.rows);
        if (response.rows.length==0) {
            res.status(404).json({error: "Invalid Credential", isAuthenticated: false}); 
        } else {

          console.log("password bd",response.rows[0].password);
          console.log("password user",password);
          const isValidPassword =  bcrypt.compare(
            password,
            response.rows[0].password
          ).then(valid => {

            console.log("isValidPassword", valid);
        
            if (!valid) {
              res.status(401).json({error: "Invalid Credential", isAuthenticated: false});
            } else {

              // if the password matches with hashed password then we generate a new token and send it back to user
              const jwtToken = generateJWT(response.rows[0].id);
          
              res.status(200).send({ jwtToken, isAuthenticated: true });
              
            }
        
            
          })

        }
      })

    //const jwtToken = generateJWT(email);

    //res.status(200).send({ jwtToken, isAuthenticated: true });
    // if the user exist then we will compare the password provided by user with the hashed password we stored during user registration
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ error: error.message });
  }
});

// user logout
router.post("/logout", async (req, res) => {
  const { email, password } = req.body;

  try {
    const jwtToken = generateFakeJWT(0);
          
              res.status(200).send({ jwtToken, isAuthenticated: false });
    
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ error: error.message });
  }
});

module.exports = router; // we need to export this router to implement it inside our server.js file
