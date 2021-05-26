const express = require('express')
const {Client} = require('pg')
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser')
const DATABASE_URL = "postgres://tbzaxrhbgddeng:29ac467aa5b8dc260e7c6c5865ac0b1a9eee9ca28c6f248d442549aa8929a60f@ec2-54-162-119-125.compute-1.amazonaws.com:5432/dabq5ojjlgkmf9"

const database = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

database.connect();

const port = 4000;

// --> Add this
// ** MIDDLEWARE ** //
const whitelist = ['http://localhost:3000', 'http://localhost:4000', 'https://lyel.herokuapp.com']
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());


app.post("/insert", (req,res)=>{
    const type = req.body.type;
    const assignee = req.body.assignee;
    const importance = req.body.importance;
    const comments = req.body.comments;
    const statement = "INSERT INTO bugs (type,assignee,importance,comments) VALUES ($1,$2, $3, $4)"
    database.query(statement, [type,assignee,importance,comments], (err,response)=>{
        if(err){console.log(err)} else {res.send(response)}
    })
})

app.get("/all", (req,res)=>{
    const statement = "SELECT * FROM bugs"
    database.query(statement, (err,response)=>{
        if(err){console.log(err)}else{ res.send(response)}
    })
})
app.delete("/delete/:id", (req,res)=>{
    const id = req.params.id;
    const statement = "DELETE FROM bugs WHERE id = $1"
    database.query(statement, [id], (err, response)=>{
        if(err){console.log(err)}else{ res.send(response)}
    })
})

app.put("/edit/:id", (req,res)=>{
    const id = req.params.id;
    const type = req.body.type;
    const assignee = req.body.assignee;
    const importance = req.body.importance;
    const comments = req.body.comments;
    const statement = "UPDATE bugs SET type = $1, assignee = $2, importance = $3, comments = $4  WHERE id = $5"
    database.query(statement, [type, assignee, importance, comments, id], (err, response)=>{
        if(err){console.log(err)}else{ res.send(response)}
    })
})

app.listen(port, ()=>{console.log(`running on port ${port}`)})