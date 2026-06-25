require("dotenv").config();

const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

async function test() {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log("DATABASE CONNECTED");
    console.log(result.rows);
  } catch (err) {
    console.log("DATABASE ERROR");
    console.log(err);
  }
}

test();