import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import { motion } from "framer-motion";
import img from "../../assets/images/mock.png";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };

  const cardVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y:0}
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              transition={{duration: 1.5, ease:"easeInOut"}} 
              className="testimonial__wrapper d-flex justify-content-between align-items-center ">

              <div className="testimonial__img w-50">
                <img src={img} alt="" className="w-100" />
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4">Our Services</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h3 className="mb-3 ">
                        Get Free Tests!
                      </h3>
                      <p>
                        Take a leap in your career by unlocking an extensive collection of test series covering the top exams of India. All this for free!
                      </p>

                      
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h3 className="mb-3 ">
                        No Compromise With Quality!
                      </h3>
                      <p>
                        We believe that it's not just enough to aim, you must hit your target. That's why we bring the best quality tests thouroughly designed and tested by IIT-IIM alumni.
                      </p>

                      
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h3 className="mb-3 ">
                        Solutions Offered!
                      </h3>
                      <p>
                        Not just correct answers, get a detailed explaination of all the questions. You can re-attempt the test and work on your weak areas. In addition, our interactive forum will provide you the platform to discuss all the typical questions.
                      </p>

                      
                    </div>
                  </div>
                </Slider>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;