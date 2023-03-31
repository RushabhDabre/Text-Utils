import React from 'react'

// import bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// import PropTypes from "prop-types";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Aboutt from './Aboutt';


export default function ReactNavbar() {
    return (
        <BrowserRouter>
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/">TextUtils</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                {/* <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">{props.abouttext}</Nav.Link>
              </Nav>
            </Container>
          </Navbar> */}

                <div>
                    <Routes>
                        <Route path='/about' element={<Aboutt/>}/>
                        {/* <Route path='/about' element={Aboutt} /> */}
                    </Routes>
                </div>
            </>
        </BrowserRouter>
    );
}



