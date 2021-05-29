import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import {useState, useEffect} from "react";
import "../css/submitbug.css";
import axios from "axios";
import React from 'react';
import ReactDOM from 'react-dom';
function Submit(){

    const [bugType, setBugType] = useState("");
    const [assignee, setAssignee] = useState("");
    const [importance, setImportance] = useState("");
    const [comments, setComments] = useState("");

    const success = ()=>{
      document.getElementsByTagName("h3")[0].innerHTML = "Success!"
    }

    const submit = () =>{
      axios.post("https://lyel.herokuapp.com/insert", {type: bugType, assignee: assignee, importance: importance, comments: comments})
    }

    return(
        <>


        <div id = "ok" className = "k">
          <Carousel variant = "dark" className = "cardz" style = {{position: 'absolute', left: '13%'}}>
            <Carousel.Item>
            <img
                style = {{position: 'relative', height: '60vh'}}
                src="https://www.paifoundation.org/wp-content/uploads/2015/10/Blank-White-square-thumbnail.jpg"
                alt="First slide"
            />
              <Carousel.Caption>
                <h5 style = {{color: "black"}}>Bug Type</h5>
                <InputGroup className="mb-3">
                            <DropdownButton
                              as={InputGroup.Prepend}
                              variant="outline-secondary"
                              title="Bug Type"
                              id="input-group-dropdown-1"
                            >
                              <Dropdown.Item id = "one" href="#" onClick = {()=>{setBugType("Compilation")}}>Compilation</Dropdown.Item>
                              <Dropdown.Item id = "two" href="#" onClick = {()=>{setBugType("Run Time")}}>Run Time</Dropdown.Item>
                              <Dropdown.Item id = "three" href="#" onClick = {()=>{setBugType("Other")}}>Other (Explain)</Dropdown.Item>
                            </DropdownButton>
                            <FormControl aria-describedby="basic-addon1" value = {bugType} id = "ij" />
                        </InputGroup>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                style = {{height: "60vh"}}
                src="https://www.paifoundation.org/wp-content/uploads/2015/10/Blank-White-square-thumbnail.jpg"
                alt="Second slide"
            />
              <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                style = {{height: "60vh"}}
                src="https://www.paifoundation.org/wp-content/uploads/2015/10/Blank-White-square-thumbnail.jpg"
                alt="Third slide"
            />
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        {/*
        <InputGroup className="mb-3">
                  <DropdownButton
                    as={InputGroup.Prepend}
                    variant="outline-secondary"
                    title="Bug Type"
                    id="input-group-dropdown-1"
                  >
                    <Dropdown.Item id = "one" href="#" onClick = {()=>{setBugType("Compilation")}}>Compilation</Dropdown.Item>
                    <Dropdown.Item id = "two" href="#" onClick = {()=>{setBugType("Run Time")}}>Run Time</Dropdown.Item>
                    <Dropdown.Item id = "three" href="#" onClick = {()=>{setBugType("Other")}}>Other (Explain)</Dropdown.Item>
                  </DropdownButton>
                  <FormControl aria-describedby="basic-addon1" value = {bugType} id = "ij" />
              </InputGroup>
        <InputGroup className="mb-3">
          <DropdownButton
            as={InputGroup.Prepend}
            variant="outline-secondary"
            title="Assignee"
            id="input-group-dropdown-1"
          >
            <Dropdown.Item href="#" onClick = {()=>{setAssignee("Bradley")}}>Bradley Lambert</Dropdown.Item>
            <Dropdown.Item href="#" onClick = {()=>{setAssignee("Kahjha")}}>Kahjha Jappa</Dropdown.Item>
            <Dropdown.Item href="#" onClick = {()=>{setAssignee("Brian")}}>Brian McKnight</Dropdown.Item>
            <Dropdown.Item href="#" onClick = {()=>{setAssignee("Unassigned")}}>Unassigned</Dropdown.Item>
          </DropdownButton>
          <FormControl aria-describedby="basic-addon1" value = {assignee}/>
        </InputGroup>

        <InputGroup className="mb-3">
          <DropdownButton
            as={InputGroup.Prepend}
            variant="outline-secondary"
            title="Importance"
            id="input-group-dropdown-1"
          >
            <Dropdown.Item href="#" onClick = {()=>{setImportance("Critical")}}>Critical</Dropdown.Item>
            <Dropdown.Item href="#" onClick = {()=>{setImportance("High")}}>High</Dropdown.Item>
            <Dropdown.Item href="#" onClick = {()=>{setImportance("Medium")}}>Medium</Dropdown.Item>
            <Dropdown.Item href="#" onClick = {()=>{setImportance("Low")}}>Low</Dropdown.Item> 
          </DropdownButton>
          <FormControl aria-describedby="basic-addon1" value = {importance}/>
        </InputGroup>

        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>Comments</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl as="textarea" aria-label="With textarea" onChange = {(e)=>{setComments(e.target.value)}}/>
    </InputGroup>
        <p> Does this look correct?<Button variant="success" onClick = {()=>{submit(); success()}}>Submit</Button></p>
        <h3 style = {{color: 'green'}}> </h3>*/}
</div>
</>
    )
}

export default Submit;