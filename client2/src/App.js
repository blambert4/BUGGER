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
    axios.delete(`https://lyel.herokuapp.com/delete/${id}`).then(getBugs());
  }
  
  /*useEffect(()=>{
    getBugs();
  })*/
  return (

  <div id = "main">
    <NavigationBar click = {handler} clicker = {mandler} clickang = 
    {home} clickio = {madeup} clickilicki = {getBugs} />
    <Madeup />
    <Home click = {handler} clicker = {mandler} clickang = 
    {home} clickio = {madeup} clickilicki = {getBugs} />
    <Submit />
    <div className = "k" id = "buggies">
        {bugs.map((bug)=>{
          return(
            <>
            <div key = {bug.id} style = {{display: "inline-flex", }}>
              <Card style={{ width: '30rem', height: '30rem'}}>
                <Card.Body>
                  <Card.Title>{bug.type} Bug</Card.Title>
                  <Card.Text>
                    Assigned to:  {bug.assignee}
                  </Card.Text>
                  <p>
                    {bug.importance} importance
                  </p>
                  <div style = {{border: "solid", height: "12rem"}}>
                    {bug.comments}
                  </div>
                  <p style = {{display: "none"}}>
                    {bug.id}
                  </p>
                  <div id = "deleteButton"> 
                    <Button variant = "warning" onClick = {()=>{document.getElementById("edit").style.display = "flex"}}> edit </Button> 
                    <Button variant = "danger" onClick = {()=>{deleteId(bug.id); getBugs()}}> delete </Button>\
                  </div>
                </Card.Body>
              </Card>
          </div>
          <Card id = "edit" className = "edit" className = "k">
            <Editor id = {bug.id} click = {getBugs} />
          </Card>
        </>
          )
        })}    
      
    </div>

    
  </div> 
  )
}

export default App;
