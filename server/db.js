const Pool = require("pg").Pool;
const dotenv = require("dotenv");

dotenv.config();
const pool = new Pool({
  user: process.env.USER || "postgres",
  password: process.env.PASSWORD,
  host: process.env.HOST || "localhost",
  port: process.env.PG_PORT || 5432,
  database: process.env.DB || "tododatabase",
});

module.exports = pool;
