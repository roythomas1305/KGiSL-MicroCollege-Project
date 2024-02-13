import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function Carousels() {
    return (
        <div style={{ display: 'block', width: 1500, padding: 30 }}>
            <h4>Welcome to KGiSL Micro College</h4>
            <Carousel>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100 h-25"
                        src="https://img-c.udemycdn.com/course/750x422/3562677_668e.jpg"
                        alt="ImageOne"
                    />
                    <Carousel.Caption>
                        <h3>Full Stack Development</h3>
                        <p>Check out our courses</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 h-25"
                        src="https://www.creativeitinstitute.com/images/course/course_1663052056.jpg"
                        alt="ImageTwo"
                    />
                    <Carousel.Caption>
                        <h3>Web Development</h3>
                        <p>Upskill Yourself</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 h-25"
                        src="https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2020_07_what_is_aws.jpg"
                        alt="ImageThree"
                    />
                    <Carousel.Caption>
                        <h3>AWS</h3>
                        <p>Be Future Ready</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 h-25"
                        src="https://christianfarioli.com/farioli/wp-content/uploads/2016/12/Digital-Marketing-low.jpg"
                        alt="ImageFour"
                    />
                    <Carousel.Caption>
                        <h3>Digital Marketing</h3>
                        <p>Come Join Us</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}