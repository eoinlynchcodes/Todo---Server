const Pool = require("pg").Pool;

const pool = new Pool({
    user: "eoinlynch",
    password: "Skipcooc95/",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;