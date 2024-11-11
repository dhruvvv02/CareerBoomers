import React,{useEffect} from "react";
import { Container, Row, Col } from "reactstrap";
import {motion, useAnimation} from "framer-motion"
import { useInView } from "react-intersection-observer";

const Company = () => {
    const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // Adjust threshold as needed
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeInOut" },
      });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <section ref={ref}>
      <Container>
        <Row className="justify-content-center ">
          <Col lg="2" md="3" sm="4" xs="6" >
            <motion.h3 
                className="d-flex align-items-center justify-content-center gap-1" 
                animate={controls}
                whileHover={{scale: 1.2}}
                whileTap={{scale: 0.9}}
                initial={{opacity: 0, y: 50}}
                transition={{duration: 0.5}}
                >
                Perform
            </motion.h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <motion.h3 
                className="d-flex align-items-center justify-content-center gap-1" 
                animate={controls} 
                whileHover={{scale: 1.2}}
                whileTap={{scale: 0.9}}
                initial={{opacity:0, y: 50}} 
                transition={{duration:0.6}}>
                Analyse
            </motion.h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <motion.h3 
                className="d-flex align-items-center justify-content-center gap-1" 
                animate={controls} 
                whileHover={{scale: 1.2}}
                whileTap={{scale: 0.9}}
                initial={{opacity:0, y: 50}} 
                transition={{duration:0.7}}
                >
                Improve
            </motion.h3>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Company;