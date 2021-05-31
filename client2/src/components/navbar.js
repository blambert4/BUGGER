import logo from '../logo.svg';
import Nav from 'react-bootstrap/nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import ReactDOM from 'react-dom';

function NavigationBar(props){

    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home" onClick = {()=>{props.clickang()}}>Bugger</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#features" onClick = {()=>{props.clickio()}}>About</Nav.Link>
            <NavDropdown title="Bugs" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" onClick = {()=>{props.click()}}>Submit</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" onClick = {()=>{props.clicker(); props.clickilicki()}}>List</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )


}

export default NavigationBar