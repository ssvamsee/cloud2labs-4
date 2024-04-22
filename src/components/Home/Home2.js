import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import TrackVisibility from "react-on-screen";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let's <span className="purple"> Intoduce </span> Ourselves
            </h1>
            <p className="home-about-body">
            Cloud2labs specializes in innovative cloud solutions, empowering businesses to succeed in the digital era.
              <br />
              <br />Our expert team provides
              <i>
                <b className="purple"> scalable and secure cloud services. </b>
              </i>
              <br />
              <br />
              From startups to enterprises, we help you &nbsp;
              <i>
                <b className="purple">optimize your cloud infrastructure </b>
              </i>
              <br />
              <br />
              Contact us to discover how &nbsp; <b className="purple">Cloud 2 Labs</b> &nbsp;can elevate your business to new heights

   
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src="Assets/avatar.svg" alt="home"/>
              }
              </TrackVisibility>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND US ON</h1>
            <p>
              Feel free to &nbsp;<Link className="connect" to="/project"><span className="purple">connect</span></Link>&nbsp; with us
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ssvamsee"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/siddamvamsee"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/siddam-sai-vamsee-prasad-32436488/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/siddamvamsee/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
