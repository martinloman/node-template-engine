// Detta är en modul som samlar all databaskommunikation.

//Paketet mysql är installerat med "npm install mysql2"
const mysql = require("mysql2/promise") // "mysql2/promise" gör att vi kan använda async/await istället för callbacks.

// Här skapas ett databaskopplings-objekt med inställningar för att ansluta till servern och databasen.
async function getConnection() {
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb",
  })
}

// Den här funktionen ska göra ett anrop till databasen för att hämta alla users.
async function getUsers() {
  const connection = await getConnection()
  const result = await connection.execute("SELECT * FROM users")

  await connection.end() //Stänger kopplingen till databasen.
  return result[0] //Plats 0 innehåller alla rader som returnerats från databasen.
}

async function getPostsByUserId(userId) {
  const connection = await getConnection()
  const result = await connection.execute(
    "SELECT * FROM posts WHERE user_id = ?",
    [userId]
  )

  await connection.end()
  return result[0] //Plats 0 innehåller alla rader som returnerats från databasen.
}

// Detta exporterar delar av modulen så att andra filer kan komma åt dem med require.
module.exports = {
  getUsers,
  getPostsByUserId,
}
