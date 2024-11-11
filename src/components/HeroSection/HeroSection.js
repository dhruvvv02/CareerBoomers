import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assets/images/hero-img1.png";
import laptop from "../../assets/images/laptop.png";
import { Typewriter } from "react-simple-typewriter";
import "./hero-section.css";

const HeroSection = () => {
  const [transform, setTransform] = useState("translate(0, 0)");

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = clientX / window.innerWidth - 0.5;
    const y = clientY / window.innerHeight - 0.5;
    setTransform(`translate(${-x * 50}px, ${-y * 50}px)`);
  };

  const handleMouseLeave = () => {
    setTransform("translate(0, 0)");
  };

  return (
    <section
      className="hero-section"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Personal Online Tutoring & Training <br />
                <span style={{color : "#17bf9e"}}>
                  <Typewriter
                    words={["Life Coach", "Speakers", "Professionals", "Tutors"]}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={50}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </span>
                <br />
                <br />
                <h3>NEW SESSION STARTS</h3>
              </h2>
              <p className="mb-5">
                Welcome to CareerBoomers, where learning transcends the ordinary! We believe in creating an engaging, interactive, and personalized educational experience for every learner. Dive into our vibrant community, explore cutting-edge resources, and embark on a journey of growth and discovery!
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search Exams" />
              <button className="btn">Search</button>
            </div>
          </Col>

          <Col lg="4" md="4" className="mt-5">
            <div className="hero__img-container">
              <img src={heroImg} alt="" className="hero__img" style={{ transform }} />
              <img src={laptop} alt="" className="hero__img hero_img-overlap" style={{ transform }} />
            </div>
          </Col>
        </Row>
      </Container>
      <svg className="curvy-bottom"></svg>
    </section>
  );
};

export default HeroSection;
