process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const pool = require('./config/db');

async function testConnection() {
    try {

        const result = await pool.query('SELECT NOW()');

        console.log("✅ Connected to Supabase successfully!");
        console.log(result.rows);

    } catch (error) {

        console.error("❌ Connection Failed");
        console.error(error);

    } finally {

        await pool.end();

    }
}

testConnection();