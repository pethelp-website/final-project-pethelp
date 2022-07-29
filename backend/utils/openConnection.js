const { Client } = require('pg');

require("dotenv").config();   // here we use dotenv module which we installed in the begining to access environment variables from .env file

// Creates a data base connection with info containing in env
function openConnection() {
  const connectionData = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
  }
  const client = new Client(connectionData);

  client.connect();
  
  return client;
}

module.exports = openConnection;  // we export this function to use it inside routes/user.js
