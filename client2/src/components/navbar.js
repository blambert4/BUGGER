import logo from '../logo.svg';
import Nav from 'react-bootstrap/nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import ReactDOM from 'react-dom';

function NavigationBar(props){

    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href = "/" onClick = {()=>{props.clickang()}}>Bugger</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link onClick = {()=>{props.clickio()}}>About</Nav.Link>
            <NavDropdown title="Bugs" id="collasible-nav-dropdown">
                <NavDropdown.Item  onClick = {()=>{props.click()}}>Submit</NavDropdown.Item>
                <NavDropdown.Item  onClick = {()=>{props.clicker(); props.clickilicki()}}>List</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )


}

export default NavigationBar