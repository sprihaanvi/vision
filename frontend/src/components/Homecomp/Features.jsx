import React from 'react'
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
const Features = () => {
  return (
    <div>
        <section id="features">
      <Container>
        <Row style={{display:'flex',textAlign:'center'}}>
          <Col lg="4" f-box>
            <i
              className="fa-solid fa-circle-check fa-4x iconn"
              style={{ color: "#408e91" }}
            />
            <h3>Easy to use.</h3>
            <p>You are just a click away and access everything with ease.</p>
          </Col>
          <Col lg="4" f-box>
            <i
              className="fa-solid fa-bullseye fa-4x iconn"
              style={{ color: "#408e91" }}
            />
            <h3>Meet with us</h3>
            <p>Having a doubt? Search for your nearby doctors today.</p>
          </Col>
          <Col lg="4" f-box>
            <i
              className="fa-solid fa-heart fa-4x iconn"
              style={{ color: "#408e91" }}
            />
            <h3>Accuracy of 94%</h3>
            <p>
              With your assessment results, we can predict your
               eye health on the go.
            </p>
          </Col>
        </Row>
      </Container>
      </section>
    </div>
  )
}

export default Features