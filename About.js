import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const About = () => {
    return (
        <div>
            <h2 style={{ margin: "20px", padding: "10px", fontWeight: "bold", textAlign: "center", color: 'red' }}>
                What I do
            </h2>
            <p style={{ margin: '50px', textAlign: 'center' }}>
                A Full Stack Developer works on both the front-end (user interface) and back-end (server-side logic, database) of web applications, ensuring end-to-end functionality and seamless user experience.
                They handle various technologies and frameworks to build complete and scalable solutions.
            </p>
            <div className="d-flex justify-content-around">
                <Card style={{ width: '18rem' }}>
                    <Card.Img style={{ width: '18rem', height: '12rem' }} variant="top" src="https://blog.eduonix.com/wp-content/uploads/2018/09/Full-Stack-Developer.jpg" />
                    <Card.Body>
                        <Card.Title> Full Stack Developer</Card.Title>
                        <Card.Text>
                            Build professional projects like the top 1% tech professionals.
                            Master React, Node JS, MongoDB, Javascript, etc with real work-experience.
                        </Card.Text>
                        <Button variant="primary">Know More</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img style={{ width: '18rem', height: '12rem' }} variant="top" src="https://toghr.com/wp-content/uploads/2020/05/fi-4-mei-2020-1.jpg" />
                    <Card.Body>
                        <Card.Title>Front-End Developer</Card.Title>
                        <Card.Text>
                            Front-end developers create and design user interfaces, ensuring seamless interaction and appealing visual elements for websites or applications.
                        </Card.Text>
                        <Button variant="primary">Know More</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img style={{ width: '18rem', height: '12rem' }} variant="top" src="https://www.liveabout.com/thmb/934mZp4W5j4MSCHusNcXGY0MXI8=/1500x1000/filters:fill(auto,1)/backenddeveloper-2502825a14ff440eb775dc4244e7ed4d.png" />
                    <Card.Body>
                        <Card.Title>Back-End Developer</Card.Title>
                        <Card.Text>
                            A back-end developer creates server-side logic, databases, and APIs, ensuring seamless functionality, data management in applications.
                        </Card.Text>
                        <Button variant="primary">Know More</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>

    )
}

export default About
