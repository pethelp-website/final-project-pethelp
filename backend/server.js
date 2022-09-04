const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get('/', (req , res) =>{
    res.send("Hello Team 5 ")
});

const { Pool } = require('pg');
const res = require("express/lib/response");

const pool = new Pool({
    user: 'usman',
    host: 'localhost',
    database: 'pet_help',
    password: 'usman0987.',
    port: 5432
});

app.get("/users", function(req, res) {
    pool
    .query('SELECT * FROM users')
    .then((result) => res.json(result.rows))
    .catch((e) =>console.error(e))

});

//post method for inserting data into users table
app.post('/users', function(req,res){
    const newUserName = req.body.name;
    const userEmail   = req.body.email;
    const userAddress = req.body.address;
    const userCity = req.body.city;
    const userPostcode = req.body.postcode;
    const userIsOwner = req.body.are_you_owner;

pool.query('SELECT * FROM users WHERE email = $1', [userEmail])
    .then ((result) =>{
    if (result.rows.length >0){
        return res
        .status(400)
        .send('user with same email is already exists');
    }else{
        const query =
        "INSERT INTO users(name, email, address, city, postcode, are_you_owner) VALUES ($1, $2, $3, $4, $5, $6)";
        pool
        .query(query, [newUserName, userEmail, userAddress, userCity, userPostcode, userIsOwner])
        .then (() => res.send ('new user created !!'))
        .catch((e) => console.error(e));
     }
})
})
// for up


//app listen
app.listen(3000, ()=> console.log("server is up and running "))