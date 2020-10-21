import React from 'react';

import * as ReactBootStrap from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <div className="App">
      <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <ReactBootStrap.Navbar.Brand href="#home">Las Antillas</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
    <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
    <ReactBootStrap.NavDropdown title="Habanos" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Cohiba</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Montecristo</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Partagás</ReactBootStrap.NavDropdown.Item>
    </ReactBootStrap.NavDropdown>
    <ReactBootStrap.NavDropdown title="Cigarros" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Flor de Copán</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Placeres</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Te amo</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Vegafina</ReactBootStrap.NavDropdown.Item>
    </ReactBootStrap.NavDropdown>
    <ReactBootStrap.NavDropdown title="Cigarritos" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Cohiba</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Montecristo</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Partagás</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Romeo y Julieta</ReactBootStrap.NavDropdown.Item>
    </ReactBootStrap.NavDropdown>
    <ReactBootStrap.NavDropdown title="Tabacos" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Tabacos para Pipas</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Tabacos para Cigarros</ReactBootStrap.NavDropdown.Item>
        
    </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
      <ReactBootStrap.Nav.Link href="#deets">Crear cuenta</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
        iniciar Sesión
      </ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
      </div>
  );
}

export default Navbar;
