const mysql = require("mysql2/promise");
const dbConfig = require("./config");

async function query(sql) {
  const connection = await mysql.createConnection(dbConfig);
  const [results] = await connection.query(sql);

  await connection.end();

  return results;
}

module.exports = { query };
