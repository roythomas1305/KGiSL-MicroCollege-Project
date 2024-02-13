import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="bg-secondary text-light py-3 mt-auto mb-0">
            <Container>
                <Row>
                    <Col>
                    <img src='https://www.kgkite.ac.in/wp-content/uploads/2021/05/kg.png' alt='kgml' fluid style={{ height: "150px", width: "200px"}}></img>
                        <p>&copy; 2024 KGiSL Micro College. All rights reserved.</p>
                    </Col>
                    <Col className="text-right">
                        <a href="https://www.facebook.com/" className="text-light me-2">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://twitter.com/" className="text-light me-2">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://www.instagram.com/" className="text-light me-2">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://www.linkedin.com/" className="text-light">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <hr></hr>
                        <h6>Contact</h6>
                        <p>+91 95007 19473</p>
                        <p>info@kgisl.microcollege.in</p>
                        <p>admissions@kgisl.microcollege.in</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;

