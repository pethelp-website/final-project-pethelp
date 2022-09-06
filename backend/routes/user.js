const express = require("express");
const pg = require("pg");
const bcrypt = require("bcrypt"); // bcrypt is used to hash password before saving it to database
const fs = require("fs"); // fs is node's inbuilt file system module used to manage files
const { generateJWT, generateFakeJWT, extractUser } = require("./generateJWT");
const client = require("../utils/openConnection");
//const generateFakeJWT = require("./generateJWT");
//const extractUser = require("./generateJWT");
const router = express.Router(); // we create a new router using express's inbuilt Router method
const INSERT_QUERY =
  "INSERT INTO users (name, email, address, city, postcode, password) VALUES($1, $2, $3, $4, $5, $6)";
const SELECT_QUERY = "SELECT * from users WHERE (email=$1)";
const DELTE_QUERY = "DELETE from users WHERE (email=$1)";
require("dotenv").config(); // here we use dotenv module which we installed in the begining to access environment variables from .env file
// Creates a data base connection with info containing in env

const client1 = new pg.Client({connectionString:process.env.DB_URL, ssl: { rejectUnauthorized: false }});

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
    console.log("salt", salt);
    const bcryptPassword = await bcrypt.hash(password, salt);
    console.log("bcrypt", bcrypt);
    const jwtToken = generateJWT(email);
    // Check user don't exists
    client1.query(SELECT_QUERY, [email], (error, response) => {
      if (error) {
        console.log("Something went wrong. " + error);
      }
      console.log("length", response.rows.length);
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
              console.log("jwtToken", jwtToken);
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
    console.log("email", email);
    client1.query(SELECT_QUERY, [email], (error, response) => {
      //console.log("query",query);
      if (error) {
        console.log("Something went wrong" + error);
        res.status(404).json({ error: "Invalid Credential", isAuthenticated: false });
      }
      //res.json(response.rows);
      if (response.rows.length == 0) {
        res.status(404).json({ error: "Invalid Credential", isAuthenticated: false });
      } else {
        console.log("password bd", response.rows[0].password);
        console.log("password user", password);
        console.log("isadmin", response.rows[0].isadmin);
        const isValidPassword = bcrypt.compare(
          password,
          response.rows[0].password
        ).then(valid => {
          console.log("isValidPassword", valid);
          if (!valid) {
            res.status(401).json({ error: "Invalid Credential", isAuthenticated: false });
          } else {
            // if the password matches with hashed password then we generate a new token and send it back to user
            const jwtToken = generateJWT({
              id: response.rows[0].id,
              email: response.rows[0].email,
              isAdmin: response.rows[0].isadmin,
              password: response.rows[0].password,
            });
            res.status(200).send({
              jwtToken, isAuthenticated: true,
              user: {
                email: response.rows[0].email,
                isAdmin: response.rows[0].isadmin,
                id: response.rows[0].id,
                password: response.rows[0].password,
              }
            });
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
  const { token } = req.body;
  try {
    res.status(200).send({ isAuthenticated: false, token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ error: error.message });
  }
});
// user delete
router.delete("/", async (req, res) => {
  const { email } = req.body;
  try {
    client1.query(
      DELTE_QUERY,
      [email],
      (error, response) => {
        if (error) {
          console.log("Something went wrong" + error);
          return res
            .status(201)
            .send({ status: "KO", description: error });
        }
        if (response.rowCount > 0) {
          return res
            .status(201)
            .send({ status: "OK" });
        } else {
          return res
            .status(404)
            .send({ status: "KO", description: "User not found" });
        }
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ error: error.message });
  }
});
module.exports = router; // we need to export this router to implement it inside our server.js file