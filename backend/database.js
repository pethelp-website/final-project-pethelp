const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'pethelp-database',
    password: 'Generations39',
    port: 5432
  });

  client.connect()


client.query(`select * from pethelp-database`, (err, result) => {
  if(!err) {
    console.log(result.rows)
  }
  client.end()
})