import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign, faSchool, faGraduationCap, faImage, faBook, faRightToBracket, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

function TableOfCourses() {
   const [course, setCourse] = useState([]);
   const [selectedCourse, setSelectedCourse] = useState({
      id: "",
      name: "",
      price: "",
      quantity: "",
      image: "",
      features: ""
   });
   const [isEditing, setIsEditing] = useState(false);
   const handleScroll = () => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
   };

   useEffect(() => {
      axios.get('https://65aa43f4081bd82e1d967f76.mockapi.io/courses')
         .then((response) => {
            setCourse(response.data);
         })
         .catch((error) => {
            console.log('Error: ', error);
         });
   }, []);

   function handleDelete(id) {
      axios.delete(`https://65aa43f4081bd82e1d967f76.mockapi.io/courses/${id}`)
         .then((response) => {
            if (response.status === 200) {
               alert("Data is Deleted")
            }
            else {
               console.error("Error: ", response.statusText)
            }
         })
         .catch((error) => {
            console.log('Error: ', error);
         });
   }

   function handleEdit(course) {
      setIsEditing(true);
      setSelectedCourse(course);
   }

   function handleUpdate() {
      axios.put(`https://65aa43f4081bd82e1d967f76.mockapi.io/courses/${selectedCourse.id}`, selectedCourse)
         .then((response) => {
            if (response.status === 200) {
               alert("Data is Updated");
               setIsEditing(false);
               setSelectedCourse({
                  id: "",
                  name: "",
                  price: "",
                  quantity: "",
                  image: "",
                  features: ""
               });
               axios.get('https://65aa43f4081bd82e1d967f76.mockapi.io/courses')
                  .then((response) => {
                     setCourse(response.data);
                  })
                  .catch((error) => {
                     console.log('Error: ', error);
                  });
            } else {
               console.error("Error: ", response.statusText);
            }
         })
         .catch((error) => {
            console.log('Error: ', error);
         });
   }

   function handleInputChange(e) {
      const { name, value } = e.target;
      setSelectedCourse(prevData => ({
         ...prevData,
         [name]: value
      }));
   }

   return (
      <div>
         <h1> Table Of Courses </h1>
         <Table striped bordered hover variant="dark" className='mb-5'>
            <thead>
               <tr>
                  <th>S.No</th>
                  <th>Course Name</th>
                  <th>Course Price</th>
                  <th>Students Enrolled</th>
                  <th>Course Image</th>
                  <th>Course Syllabus</th>
                  <th>Actions</th>
               </tr>
            </thead>
            <tbody>
               {course.map((course, index) => (
                  <tr key={course.id}>
                     <td>{index + 1}</td>
                     <td>{course.name}</td>
                     <td> <FontAwesomeIcon icon={faIndianRupeeSign} /> {course.price}</td>
                     <td>{course.quantity}</td>
                     <td><img src={course.image} alt='courseimage' fluid style={{ height: "200px", width: "300px" }}></img></td>
                     <td>{course.features}</td>
                     <td>
                        <Button
                           className='btn btn-success'
                           onClick={() => {
                              handleEdit(course);
                              handleScroll();
                           }}
                        >
                           Update <FontAwesomeIcon icon={faPen} />
                        </Button>
                        <Button className='btn btn-danger' onClick={() => handleDelete(course.id)}>Delete <FontAwesomeIcon icon={faTrash} /> </Button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </Table>
         {isEditing && (
            <div>
               <h2>Edit Course</h2>
               <Form className='ms-5 me-5 mb-5'>
                  <Form.Group controlId="formCourseName">
                     <Form.Label> <FontAwesomeIcon icon={faBook} /> Course Name</Form.Label>
                     <Form.Control type="text" placeholder="Enter Course Name" name="name" value={selectedCourse.name} onChange={handleInputChange} />
                  </Form.Group>
                  <Form.Group controlId="formCoursePrice">
                     <Form.Label> <FontAwesomeIcon icon={faIndianRupeeSign} /> Course Price</Form.Label>
                     <Form.Control type="text" placeholder="Enter Course Price" name="price" value={selectedCourse.price} onChange={handleInputChange} />
                  </Form.Group>
                  <Form.Group controlId="formCourseQuantity">
                     <Form.Label> <FontAwesomeIcon icon={faGraduationCap} /> Students Enrolled</Form.Label>
                     <Form.Control type="text" placeholder="Enter Students Enrolled" name="quantity" value={selectedCourse.quantity} onChange={handleInputChange} />
                  </Form.Group>
                  <Form.Group controlId="formCourseImage">
                     <Form.Label> <FontAwesomeIcon icon={faImage} /> Course Image</Form.Label>
                     <Form.Control type="text" placeholder="Enter Course Image URL" name="image" value={selectedCourse.image} onChange={handleInputChange} />
                  </Form.Group>
                  <Form.Group controlId="formCourseFeatures">
                     <Form.Label> <FontAwesomeIcon icon={faSchool} /> Course Syllabus</Form.Label>
                     <Form.Control as="textarea" rows={3} placeholder="Enter Course Syllabus" name="features" value={selectedCourse.features} onChange={handleInputChange} />
                  </Form.Group>
                  <Button variant="info" onClick={handleUpdate}>
                     Update <FontAwesomeIcon icon={faRightToBracket} />
                  </Button>
               </Form>
            </div>
         )}
      </div>
   );
}

export default TableOfCourses;

