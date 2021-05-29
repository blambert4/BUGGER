import React from 'react';
import ReactDOM from 'react-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from "react";
import axios from "axios";


function Editor(props){
    const [newType, setNewType] = useState("");
    const [newAssignee, setNewAssignee] = useState("");
    const [newImportance, setNewImportance] = useState("");
    const [newComments, setNewComments] = useState("");      

    const edited = (id)=>{
      axios.put(`http://localhost:4000/edit/${id}`, {type: newType, assignee: newAssignee, importance: newImportance, comments: newComments})
    } 

    return(
        <>
<InputGroup className="mb-3">
          <DropdownButton
            as={InputGroup.Prepend}
            variant="outline-secondary"
            title="Bug Type"
            id="input-group-dropdown-1"
          >
            <Dropdown.Item id = "one" href="#" onClick = {()=>{setNewType("Compilation"); console.log(newType)}}>Compilation</Dropdown.Item>
            <Dropdown.Item id = "two" href="#" onClick = {()=>{setNewType("Run Time")}}>Run Time</Dropdown.Item>
            <Dropdown.Item id = "three" href="#" onClick = {()=>{setNewType("Other")}}>Other (Explain)</Dropdown.Item>
          </DropdownButton>
          <FormControl aria-describedby="basic-addon1" value = {newType}/>
        </InputGroup>

        <InputGroup className="mb-3">
          <DropdownButton
            as={InputGroup.Prepend}
            variant="outline-secondary"
            title="Assignee"
            id="input-group-dropdown-1"
          >
            <Dropdown.Item href="#" onClick = {()=>{setNewAssignee("Bradley")}}>Bradley Lambert</Dropdown.Item>
            <Dropdown.Item href="#" onClick = {()=>{setNewAssignee("Kahjha")}}>Kahjha Jappa</Dropdown.Item>
            <Dropdown.Item href="#" onClick = {()=>{setNewAssignee("James")}}>James Charles</Dropdown.Item>
            <Dropdown.Item href="#" onClick = {()=>{setNewAssignee("Unassigned")}}>Unassigned</Dropdown.Item>
          </DropdownButton>
          <FormControl aria-describedby="basic-addon1" value = {newAssignee}/>
        </InputGroup>

        <InputGroup className="mb-3">
          <DropdownButton
            as={InputGroup.Prepend}
            variant="outline-secondary"
            title="Importance"
            id="input-group-dropdown-1"
          >
            <Dropdown.Item href="#" onClick = {()=>{setNewImportance("Critical")}}>Critical</Dropdown.Item>
            <Dropdown.Item href="#" onClick = {()=>{setNewImportance("High")}}>High</Dropdown.Item>
            <Dropdown.Item href="#" onClick = {()=>{setNewImportance("Medium")}}>Medium</Dropdown.Item>
            <Dropdown.Item href="#" onClick = {()=>{setNewImportance("Low")}}>Low</Dropdown.Item> 
          </DropdownButton>
          <FormControl aria-describedby="basic-addon1" value = {newImportance}/>
        </InputGroup>

        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>Comments</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl as="textarea" aria-label="With textarea" onChange = {(e)=>{setNewComments(e.target.value)}}/>
        </InputGroup>
            <button onClick = {()=>{edited(props.id)}}> edit</button>
            <button onClick = {()=>{document.getElementById("edit").style.display = "none"}}> close </button>
        </>
    )
}

export default Editor;