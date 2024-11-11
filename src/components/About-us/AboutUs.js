import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "reactstrap";
import aboutImg from '../../assets/images/aboutUs.webp'
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  const counterValues = [
    {count: 308, text: "VIDEO COURSES"},
    {count: 2, text: "LIVE COURSES"},
    {count: 78079, text: "TESTS"},
  ]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    // Function to switch the counter value every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % counterValues.length);
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [counterValues.length]);

  const cardVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y:0}
  }

  return (
    <section id="about-us">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              transition={{duration: 1, ease:"easeInOut"}} 
              className="about__content">
              <h2>About Us</h2>
              <p className="about-text">
              At CareerBoomers, we are dedicated to empowering individuals with the skills and knowledge they need to thrive in their careers. Our mission is to provide accessible, high-quality 
              learning experiences that transform potential into success. Join us on this journey to build, grow, 
              and achieve together!
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={4039} duration={2} suffix=""  />
                    </span>

                    <p className="counter__title">USERS</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={92000} duration={2} suffix="" />
                    </span>

                    <p className="counter__title">QUESTIONS ATTEMPTED</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={1591} duration={2} suffix="" />
                    </span>

                    <p className="counter__title">EXAMS</p>
                  </div>

                  <div className="single__counter blinking-text">
                    <span className="counter">
                      <CountUp start={counterValues[currentIndex].count} end={counterValues[currentIndex].count} duration={2} suffix="" />
                    </span>

                    <p className="counter__title ">{counterValues[currentIndex].text}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;