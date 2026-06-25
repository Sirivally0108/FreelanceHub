const pool = require("../config/db");

exports.clientDashboard = async (req,res)=>{

try{

const result = await pool.query(`
SELECT
COUNT(*) as total_projects
FROM projects
WHERE client_id=1
`);

res.json(result.rows[0]);

}catch(err){

res.status(500).json({message:err.message});

}

}
