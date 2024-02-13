import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket,faIndianRupeeSign,faSchool,faGraduationCap,faCircleInfo,faImage,faBook } from '@fortawesome/free-solid-svg-icons';

function FormSection() {
  
  let passCompenet  =useNavigate()
    const [formdata, setformdata] = useState({
        name: "",
        price: "",
        quantity: "",
        image: "",
        features: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setformdata(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://65aa43f4081bd82e1d967f76.mockapi.io/courses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formdata)
        })
        .then(response => {
            if (response.ok) {
                alert("Course is Added");
            } else {
                alert("Course not Added");
            }
        })
        .catch(error => {
            console.error("Error: ", error);
        });
    };

    return (
        <div>
            <h2>Add Courses At KGiSL Micro College</h2>
            <Form onSubmit={handleSubmit} className='ms-5 me-5 mb-5'>
                <Form.Group className="mb-3" controlId="CourseName">
                    <Form.Label> <FontAwesomeIcon icon={faBook} /> Name of Course</Form.Label>
                    <Form.Control type="text" placeholder="Name" value={formdata.name} name="name" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="CoursePrice">
                    <Form.Label> <FontAwesomeIcon icon={faIndianRupeeSign} /> Price of Course</Form.Label>
                    <Form.Control type="text" placeholder="Price" value={formdata.price} name="price" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="CourseQuantity">
                    <Form.Label> <FontAwesomeIcon icon={faGraduationCap} /> Students Enrolled</Form.Label>
                    <Form.Control type="text" placeholder="Students Enrolled" value={formdata.quantity} name="quantity" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="CourseImage">
                    <Form.Label> <FontAwesomeIcon icon={faImage} /> Image of Course</Form.Label>
                    <Form.Control type="text" placeholder="Image" value={formdata.image} name="image" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="CourseDescription">
                    <Form.Label> <FontAwesomeIcon icon={faSchool} /> Course Syllabus</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Syllabus" value={formdata.features} name="features" onChange={handleChange} />
                </Form.Group>
                <Button variant="info" type={"submit"}>Submit <FontAwesomeIcon icon={faRightToBracket} /> </Button>
                <Button variant="dark" type= {"button"} onClick={()=>{return passCompenet('./table')}}>View all details <FontAwesomeIcon icon={faCircleInfo} /> </Button>
            </Form>
        </div>
    );
}

export default FormSection;