const express = require('express')
const path = require('path');
const {Client} = require('pg')
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser')
const routes = require('./routes');
const DATABASE_URL = "postgres://tbzaxrhbgddeng:29ac467aa5b8dc260e7c6c5865ac0b1a9eee9ca28c6f248d442549aa8929a60f@ec2-54-162-119-125.compute-1.amazonaws.com:5432/dabq5ojjlgkmf9"

const database = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

database.connect();

const port = process.env.PORT || 4000;


app.use(express.static(path.join(__dirname, 'folder')));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());
app.use(routes)




app.listen(port, '0.0.0.0', ()=>{console.log(`running on port ${port}`)})