import React from "react";
import {Container, Nav, Navbar} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './home.jsx';
import Quienes from "./vistas/quienes.jsx";
import VerCliente from './vistas/verApi.jsx';
import NotMatch from "./vistas/NotMatch";
import Contactenos from './vistas/contactenos.jsx';
import Mision from './vistas/mision.jsx';

const Menu =()=>{
    return(    
    <Router>
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
            <Navbar.Brand href="/">Inicio</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="quienes">Quienes Somos?</Nav.Link>
                <Nav.Link href="mision">Mision</Nav.Link>
                <Nav.Link href="contactenos">Contactenos</Nav.Link>
                <Nav.Link href="api">Ver Api</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        <Routes>
            <Route path="/" element = {<Home/>} />
            <Route path="/quienes" element = {<Quienes/>} />
            <Route path="/contactenos" element = {<Contactenos/>} />
            <Route path="/mision" element = {<Mision/>} />
            <Route path="/api" element = {<VerCliente/>} />
            <Route path="*" element={<NotMatch />} />
        </Routes>
    </Router>
    );
}
export default Menu;