import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { motion, useAnimation, useInView } from "framer-motion";
import chooseImg from "../../assets/images/why-choose-us.png";
import "./choose-us.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 }); 
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y:0}
  }
  
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <motion.div  
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              transition={{duration: 1, ease:"easeInOut"}} 
              className="choose__content">

              <h2>Personalized Performance Analysis</h2>
              <p>
              Get Personalized Learning Outcomes for everyone. An in-depth performance analysis, where you can know your strong and weak points, your all India rank, your state rank etc. You will also get a virtual tutor who is completely dedicated to bringing out the best in you. It will prioritize your concepts, chapters, topics, and questions through machine learning. Get this innovative learning experience only on Careerboomers Test Series!!
              </p>
            </motion.div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=qFp27TR4Yew"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;