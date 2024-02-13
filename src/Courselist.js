import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo,faIndianRupeeSign,faGraduationCap } from '@fortawesome/free-solid-svg-icons';
function CourseList() {
    const [course, setCourse] = useState([]);

    useEffect(() => {
        axios.get('https://65aa43f4081bd82e1d967f76.mockapi.io/courses')
            .then((response) => {
                setCourse(response.data);
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    }, []);

    return (
        <div className="container mt-5">
            <h1>Course List</h1>
            <div className="row mb-5">
                {course.map((course) => (
                    <div className='col-md-4 mb-3' key={course.id}>
                        <div className='card h-100'>
                            <img src={course.image} className='card-img-top' alt={course.name} style={{ height: '200px' }} />
                            <div className='card-body bg-secondary'>
                                <h3 className='card-title'>{course.name}</h3>
                                <p className='card-text'>Price: <FontAwesomeIcon icon={faIndianRupeeSign} /> {course.price}</p>
                                <p className='card-text'>Students Enrolled: <FontAwesomeIcon icon={faGraduationCap} /> {course.quantity}</p>
                                <Link to={`/${course.id}`} className="btn btn-info"> <span></span> More Info <FontAwesomeIcon icon={faCircleInfo} /> </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CourseList;