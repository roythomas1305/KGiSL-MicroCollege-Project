import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser } from '@fortawesome/free-solid-svg-icons';

function BasicExample() {
    const handleScroll = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    };

    return (
        <Navbar expand="lg" bg="secondary" data-bs-theme="light" sticky="top">
            <Container>
                <Navbar.Brand href="/">
                    <span>
                        <img
                            src="https://microcollege.in/wp-content/uploads/2023/12/Microcollege-Logo-New1.webp"
                            alt="logo"
                            fluid
                            style={{ height: '50px', width: '150px' }}
                        />
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className="nav-link" onClick={handleScroll}>
                            <FontAwesomeIcon icon={faHouse} /> Home
                        </Link>
                        <Link to="/login" className="nav-link" onClick={handleScroll}>
                            <FontAwesomeIcon icon={faUser} /> Login
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;
