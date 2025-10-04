// db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',          // PostgreSQL username
  host: 'postgres',      // host (use container name if dockerized)
  database: 'aman',          // your database name
  password: 'aman1333',      // your PostgreSQL password
  port: 5432,                // default PostgreSQL port
});

module.exports = pool;
