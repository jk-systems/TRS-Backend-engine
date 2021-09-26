const mysql = require('mysql')
const bodyparser = require('body-parser')

//DB
let mysqlConnection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "trs"
})

mysqlConnection.connect((err) => {
  if(!err)
    console.log(`Database connection was a success by ${process.env.DB_USER}`)
  else
    console.log(`DB connection failed : ${JSON.stringify(err, undefined, 2)}`);
})

const Weather = require("../model/Auth")
const Table = require("../model/Table")
const { json } = require('body-parser')

exports.renderHomePage = (req, res) => {
  res.render("index")
  console.log("registered a Get request from Client");
}
exports.getTable = (req, res) => {
  const tname = req.body.tbl_name
  const table = new Table(req.body.tname)
  table.validateUserInput()
  if (table.errors.length) {
    res.render("index", {
      error: table.errors.toString()
    })
  }
  mysqlConnection.query('SELECT * FROM resource_details LIMIT 100', (err, rows, fields) => {
    if(!err){
      let rowdata = rows
    
      res.render("index", {
        tableData : tname,
        resData   : rowdata
      })
      res.json({
        Status: "Success",
        ServerMsg: "hello from backend"
      });
      res.end
      console.log("Registered a client POST request");
    }
    else{
      console.log(err)
    }
  })
}
exports.renderAboutPage = (req, res) => {
  res.render("about")
}
//no bullshit