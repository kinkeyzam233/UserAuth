const pgp = require('pg-promise')();
require('dotenv').config();


const db = pgp({
    host: process.env.DB_HOST,      // e.g., 'localhost'
    port: 5432,                     // PostgreSQL default port
    database: process.env.DB_NAME,  // e.g., 'UserAuth'
    user: process.env.DB_USER,      // e.g., 'postgres'
    password: process.env.DB_PASS   // e.g., 'kinleyzam'
});



module.exports = db;