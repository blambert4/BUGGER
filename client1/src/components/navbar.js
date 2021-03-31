import logo from '../logo.svg';
import Nav from 'react-bootstrap/nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';


function NavigationBar(props){

    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home" onClick = {()=>{props.clickang()}}>Bugger</Navbar.Brand>
        <img style = {{width: "50px"}}src = {logo} />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#features">How is it Made</Nav.Link>
            <NavDropdown title="Bugs" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" onClick = {()=>{props.click()}}>submit a bug</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" onClick = {()=>{props.clicker()}}>bug list</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">find a bug</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )


}

export default NavigationBar