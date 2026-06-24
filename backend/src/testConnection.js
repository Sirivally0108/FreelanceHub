process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const pool = require('./config/db');

async function test() {
    try {
        const result = await pool.query('SELECT NOW()');
        console.log('SUCCESS');
        console.log(result.rows[0]);
    } catch (err) {
        console.log(err);
    }
}

test();