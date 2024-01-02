import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


const Projects = () => {
  return (
    <div>
      <h1 style={{
        textAlign: "center",
        marginTop: "40px",
        fontWeight: "bold",
        color: "#4caf50"
      }}>

        Front-End Technologies
      </h1>
      {/* <h2 style={{textAlign:"center"}}>Front-End</h2> */}
      <Container style={{ margin: "60px", display: "flex", justifyContent: "space-evenly" }}>
        <Row>
          <Col xs={6} md={4}>
            <Image src="https://wallpapercave.com/wp/wp4923992.png" thumbnail />
          </Col>
          <Col xs={6} md={4}>
            <Image src="https://wallpapercave.com/wp/wp2742456.jpg" thumbnail />
          </Col>
          <Col xs={6} md={4}>
            <Image src="https://wallpapercave.com/wp/wp12454889.png" thumbnail />
          </Col>
        </Row>
      </Container>
      <Container style={{ margin: "60px", display: "flex", justifyContent: "space-evenly" }}>
        <Row>
          <Col xs={6} md={4}>
            <Image src="https://getlevelten.com/sites/default/files/styles/1200x675/public/content/blog/images/screen_shot_2014-04-11_at_4.28.22_pm.png?itok=MW9xDFNK&timestamp=1397253023" thumbnail />
          </Col>
          <Col xs={6} md={4}>
            <Image src="https://miro.medium.com/v2/resize:fit:1000/1*htbUdWgFQ3a94PMEvBr_hQ.png" thumbnail />
          </Col>
          <Col xs={6} md={4}>
            <Image src="https://i.ytimg.com/vi/iy-fyfePVsQ/maxresdefault.jpg" thumbnail />
          </Col>

        </Row>
      </Container>
      <h1 style={{
        textAlign: "center",
        marginTop: "40px",
        fontWeight: "bold",
        color: "#4caf50"
      }}>

        Back-End Technologies
      </h1>
      <Container style={{ margin: "60px", display: "flex", justifyContent: "space-evenly", animation: "zoomIn 0.3s forwards" }}>
        <Row>
          <Col xs={6} md={4}>
            <Image src="https://wallpapercave.com/wp/wp5191387.jpg" thumbnail />
          </Col>
          <Col xs={6} md={4}>
            <Image src="https://i0.wp.com/blog.knoldus.com/wp-content/uploads/2021/12/exprss.jpg?w=1280&ssl=1" thumbnail />
          </Col>
          <Col xs={6} md={4}>
            <Image src="https://i.ytimg.com/vi/WDJUkysvpjc/maxresdefault.jpg" thumbnail />
          </Col>
        </Row>
      </Container>


    </div>


  )
}

export default Projects



