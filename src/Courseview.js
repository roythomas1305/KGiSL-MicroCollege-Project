import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Form, Modal } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faIndianRupeeSign, faSchool, faCircleInfo, faRectangleXmark, faEnvelope, faGraduationCap, faUser, faBook, faPhone, faCheck, faBolt } from '@fortawesome/free-solid-svg-icons';

function CourseView() {
    const { id } = useParams();
    const [course, setCourse] = useState();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    useEffect(() => {
        axios.get(`https://65aa43f4081bd82e1d967f76.mockapi.io/courses/${id}`)
            .then((response) => {
                console.log(response.data);
                setCourse(response.data);
            })
            .catch((error) => {
                console.error('Error fetching course details:', error);
            });
    }, [id]);

    if (!course) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-5 mb-5">
            <h1>Course Details</h1>
            <div className="row">
                <div className="col-md-6">
                    <img
                        src={course.image}
                        className="img-fluid"
                        alt={course.name}
                    />
                </div>
                <div className="col-md-6">
                    <h2>{course.name}</h2>
                    <p>Price: <FontAwesomeIcon icon={faIndianRupeeSign} /> {course.price}</p>
                    <p>Syllabus:  <FontAwesomeIcon icon={faSchool} />  {course.features}</p>
                    <Button variant="info" type="submit" onClick={handleShow}>
                        Enroll Now <FontAwesomeIcon icon={faRightToBracket} />
                    </Button>
                    <Button variant="dark" onClick={handleShow2}>
                        About <FontAwesomeIcon icon={faCircleInfo} />
                    </Button>
                </div>
            </div>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title> <FontAwesomeIcon icon={faGraduationCap} /> Student Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label> <FontAwesomeIcon icon={faEnvelope} /> Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Your Email Adresss"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label> <FontAwesomeIcon icon={faUser} /> Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Your Full Name"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                            <Form.Label> <FontAwesomeIcon icon={faBook} /> Education</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Highest Qualification"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                            <Form.Label> <FontAwesomeIcon icon={faPhone} /> Contact</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Contact Number"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label> <FontAwesomeIcon icon={faCircleInfo} /> Additional Infornmation</Form.Label>
                            <Form.Control as="textarea" rows={5} placeholder="Provide any additional infomation you feel like sharing with us regarding your interest in this course and we will get back to you." />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleClose}>
                        Close <FontAwesomeIcon icon={faRectangleXmark} />
                    </Button>
                    <Button variant="info" onClick={handleClose}>
                        Submit <FontAwesomeIcon icon={faRightToBracket} />
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={show2} onHide={handleClose2} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title> <FontAwesomeIcon icon={faSchool} /> About KGiSL Training</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    We're not the typical suits-and-ties Education company. We're more like a support system and cheerleaders for students who are ready to skill up or, make a 360-degree career shift.We champion students by equipping them with today's & tomorrow's job skills, making them industry-ready.Our guiding principle gives us hope - help us innovate and implement. <FontAwesomeIcon icon={faBolt} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleClose2}>
                        Close <FontAwesomeIcon icon={faRectangleXmark} />
                    </Button>
                    <Button variant="info" onClick={handleClose2}>Understood <FontAwesomeIcon icon={faCheck} /> </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CourseView;