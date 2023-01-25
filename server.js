import express from "express"
import { engine } from "express-handlebars"
import db from "./services/db.js"

const app = express()

app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", "./views")

app.get("/", (req, res) => {
  res.render("home")
})

app.get("/users", async (req, res) => {
  const users = await db.getUsers()
  res.render("users", { users })
})

app.get("/posts", async (req, res) => {
  const userId = req.query.userId
  const posts = await db.getPostsByUserId(userId)
  res.render("posts", { userId, posts })
})

const port = 3000
app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
