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

const Auth = require("../model/Auth")
const Table = require("../model/Table")
const { json } = require('body-parser')

exports.renderHomePage = (req, res) => {
  res.render("index")
  console.log("registered a Get request from Client");
}

exports.authUser = (req, res) => {
  const username = req.body.username;
  const pass = req.body.password;
  const params = [username, pass]
  const q = `SELECT * FROM trs.users where username =? and password =?;`
  mysqlConnection.query(q, params, (err, rows, fields) => {
    if(!err){
      let rowdata = rows
      if (rows > 0) {
        res.json({
          Status: "Success",
          ServerMsg: "hello from backend"
        });
        res.end
      }
      console.log("Registered a client Authentication request", rowdata);
    }
    else{
      console.log(err)
    }
  })
  const auth = new Auth()
  const tokens = auth.generateUserTokens()
  res.json({
    Status: "success",
    sys:"trs",
    Tokens: tokens
  })
  res.render("index.html")
   
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

exports.addSquadType = (req, res) => {
  console.log(req.body);
  res.json({
    status:"200"
  })
}

exports.addSquad = (req, res) => {
  console.log("Server registered add squad Request!")
  console.warn("BE operations inprogress")
  console.log(req.body);
  res.json({
    status:"200"
  })
}


exports.rscAdd = (req, res) => {
  console.log("succuss add rescouce");
}

//////////////////////////////////////////////////////////////////////////////
exports.addResource = (req, res) => {
  console.log(req.body)
  res.json({
    Status : 200
  })
}
/////////////////////////////////////////////////////////////////////////////
exports.getTt = (req, res) => {
  console.log("received a fetch request!");
  mysqlConnection.query('SELECT * FROM trs.tribe_types;', (err, rows, fields) => {
    if(!err){
      let rowdata = rows
      console.log(fields)
      res.send(rows)
    }   else{
      console.log(err)
    }
  })
}
/////////////////////////////////////////////////////////////////////////////
exports.addTt = (req, res) => {
  console.log(req.body.TribeType);
  let TribeType = req.body.TribeType 
 console.log(TribeType);
 mysqlConnection.query("INSERT INTO `trs`.`tribe_types` (`types`) VALUES ('"+ TribeType +"');", (err, rows, fields) => {
   if(!err){
     console.log("Data Added to DB")
   }   else{
     console.log(err)
   }
 })
  res.json({
    Status : 200,
    tradeType : TribeType,
    db : {
      TribeType
    }
  })
}