import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import TrackVisibility from "react-on-screen";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                Welcome To
                <strong className="main-name"> Cloud 2 Labs </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
            <Tilt>
              <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} style={{ maxHeight: "450px" }} src="Assets/home-main.svg" alt="home"/>
              }
            </TrackVisibility>
            </Tilt>
            </Col>
          </Row>
        </Container>
        <h1 className="blinking-text">Where Innovation Meets Intelligence In Cloud</h1>
        <div class="field">
          <div class="mouse"></div>
        </div>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
