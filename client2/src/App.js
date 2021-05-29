import React from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';
import logo from "./logo.svg"
import axios from "axios";
import {useState, useEffect} from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import './css/bugger.css';
import Home from "./components/Home";
import NavigationBar from "./components/navbar";
import Submit from "./components/submitbug";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Editor from "./components/editbug";
import Madeup from "./components/madeup";
import "./css/allbugs.css";
function App() {
  
  //onclicks
  const handler = ()=> {
    var many = document.querySelectorAll(".k");
    var one = document.getElementById("ok");
    for (var i = 0; i < many.length; i++) {
      many[i].style.display = "none";
    }
    one.style.display = "block";
  }
  const mandler = ()=> {
    var many = document.querySelectorAll(".k");
    var one = document.getElementById("buggies");
    for (var i = 0; i < many.length; i++) {
      many[i].style.display = "none";
    }
    one.style.display = "block";
  }

  const [bugs, setBugs] = useState([]);
  const getBugs = () =>{
        axios.get("https://lyel.herokuapp.com/find").then((response)=>{setBugs(response.data.rows)})
    }
  
  const home = () =>{
    var many = document.querySelectorAll(".k");
    var one = document.getElementById("home");
    for (var i = 0; i < many.length; i++) {
      many[i].style.display = "none";
    }
    one.style.display = "block";
  }

  const madeup = () =>{
    var many = document.querySelectorAll(".k");
    var one = document.getElementById("madeup");
    for (var i = 0; i < many.length; i++) {
      many[i].style.display = "none";
    }
    one.style.display = "block";
  }

  const deleteId = (id) =>{
    axios.delete(`http://localhost:4000/delete/${id}`).then(getBugs());
  }
  
  /*useEffect(()=>{
    getBugs();
  })*/
  return (

  <div id = "main">
    <NavigationBar click = {handler} clicker = {mandler} clickang = 
    {home} clickio = {madeup} clickilicki = {getBugs} />
    <Madeup />
    <Home />
    <Submit />
    <div className = "k" id = "buggies">
        {bugs.map((bug)=>{
          return(
            <div key = {bug.id} className = "row" >
              <small> {bug.id }</small>
              <div id = "type" > {bug.type} </div>
              <div id = "importance"> {bug.importance} </div>
              <div id = "assignee"> {bug.assignee} </div>
              <div id = "comments"> {bug.comments} </div>
              <div id = "deleteButton"> 
                <Button variant = "warning" onClick = {()=>{document.getElementById("edit").style.display = "block"}}> edit </Button> 
                <Button variant = "danger" onClick = {()=>{deleteId(bug.id)}}> delete </Button></div>
                <Card id = "edit" style = {{display: "none"}} className = "k">
                  <Editor id = {bug.id} />
                </Card>
            </div>
          )
        })}    
      
    </div>

    
  </div> 
  )
}

export default App;
