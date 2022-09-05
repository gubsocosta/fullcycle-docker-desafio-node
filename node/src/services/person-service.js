const db = require("../database/db");

async function getAllNames() {
  const results = await db.query(`SELECT * FROM people`);

  return results.map((result) => result.name);
}

async function insert(name = "Gabriel") {
  const results = await db.query(`INSERT INTO people(name) values("${name}")`);

  if (results.changeRows) throw new Error("error in insert person");
}

module.exports = {
  getAllNames,
  insert,
};
