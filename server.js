const path = require("path")
const express = require("express")
const dotenv = require('dotenv')
const bodyparser = require('body-parser')

const app = express()
const cors = require('cors')
dotenv.config()

const router = require("./src/router")
const port = process.env.PORT

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static("public"))
// app.set("views", "views")

//app.set("view engine", "hbs")

app.use(cors({
  origin: '*'
}));

app.use("/", router)

app.listen(port, () => {
  console.log(`The server is now running on Port : ${port}`)
})
//EOF