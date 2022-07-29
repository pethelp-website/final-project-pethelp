
const express = require("express");
const { Client } = require('pg');
const bcrypt = require("bcrypt");   // bcrypt is used to hash password before saving it to database
const fs = require("fs");   // fs is node's inbuilt file system module used to manage files

const generateJWT = require("./generateJWT");
const client = require('./openConnection');

const router = express.Router();   // we create a new router using express's inbuilt Router method
/*
const connectionData = {
    user: 'postgres',
    host: 'localhost',
    database: 'dbnodeauthprojectmigracode',
    password: 'postgres',
    port: 5432,
  }
  const client = new Client(connectionData);

  client.connect();*/

  /*const insert = user => {
    const query = "INSERT INTO Users_proj (name, username, password) VALUES($1, $2, $3)";
    client.query(query, [user.name, user.email, user.password], (error, response)=> {
      if (error) {
        console.log("Something went wrong" + error);
        return "KO";
      }
      
    });
        
        return "OK";
  }

  const select = email => {
    const query = "SELECT * from Users_proj WHERE (username=$1)";
    client.query(query, [email], (error, response)=> {
      if (error) {
        console.log("Something went wrong" + error);
        return "KO";
      }
      console.log(response.rows);
      return response.rows;
      
    });
        
  }
*/

// user registration / sign-up
router.post("/sign-up", async (req, res) => {
  const {  name, email, password } = req.body;
  console.log("en signup");

  try {
    const user = "";
    //await usersDb.filter(user => user.email === email);

    if (user.length > 0) {
      return res.status(400).json({error: "User already exist!"});
    }

    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);

    let newUser = {
      name: name,
      email: email,
      password: bcryptPassword
    }

    // we add newUser to usersDb 
    ////////////////////////////////////////////insert(newUser);


    
    
    /* Once the user registration is done successfully, we will generate a
      jsonwebtoken and send it back to user. This token will be used for
      accessing other resources to verify identity of the user.
      
      The following generateJWT function does not exist till now but we
      will create it in the next step. */
    
    const jwtToken = generateJWT(newUser.id);

    return res.status(201).send({ jwtToken: jwtToken, isAuthenticated: true});

  } catch (error) {
    console.error(error.message);
    res.status(500).send({error: error.message});
  }
});

/*router.get("/sign", async (req, res) => {
    /*client.query("select * from public.users_proj")
        .then(response => {
            console.log("response: ",response.rows);
            //client.end()
        })
        .catch(err => {
            console.log("Error BD  get", err);
           // client.end()get
        });
    res.status(200).json("OK");
});
*/


// user sign-in / login
router.post("/sign-in", async (req, res) => {
  const { email, password } = req.body;

  try {
    /*const query = "SELECT * from users_proj WHERE username = $1";
    console.log("email",email);
      client.query(query, [email], (error, response)=> {
        console.log("query",query);
        if (error) {
          console.log("Something went wrong" + error);
          res.json( "KO");
        }
        //res.json(response.rows);
        if (response.rows.length==0) {
            res.status(404).json({error: "Invalid Credential", isAuthenticated: false}); 
        } else {

          console.log("password",response.rows[0].password);
          const isValidPassword =  bcrypt.compare(
            password,
            response.rows[0].password
          );
      
          if (!isValidPassword) {
            res.status(401).json({error: "Invalid Credential", isAuthenticated: false});
          }
      
          
          // if the password matches with hashed password then we generate a new token and send it back to user
          const jwtToken = generateJWT(response.rows[0].id);
      
          res.status(200).send({ jwtToken, isAuthenticated: true });
          
        }
      });*/
          
      const jwtToken = generateJWT(email);
      
      res.status(200).send({ jwtToken, isAuthenticated: true });
    // if the user exist then we will compare the password provided by user with the hashed password we stored during user registration

  } catch (error) {
    console.error(error.message);
    res.status(500).send({error: error.message});
  }
});


module.exports = router;   // we need to export this router to implement it inside our server.js file
