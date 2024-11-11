import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assets/images/python.jpg";
import courseImg2 from "../../assets/images/tcs-nqt.jpg";
import courseImg3 from "../../assets/images/c.jpg";
import aws from "../../assets/images/aws.jpg";
import ninja from "../../assets/images/tcs_ninja.jpg";

import "./courses.css";
import CourseCard from "./CourseCard";


const coursesData = [
  {
    id: "01",
    title: "Python - Basics to Advance",
    lesson: 7,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg1,
    subExamName: "Python"
  },

  {
    id: "02",
    title: "TCS NQT(National Qualifier Test)",
    lesson: 8,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg2,
    subExamName: "TCS National Qualifier Test(NQT)"
  },

  {
    id: "03",
    title: "C language - Basics to Advance",
    lesson: 8,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
    subExamName: "C Language"
  },

  {
    id: "04",
    title: "AWS Certified Solutions Architect Associate (SAA)",
    lesson: 8,
    students: 12.5,
    rating: 5.9,
    imgUrl: aws,
    subExamName: "AWS Certified Solutions Architect Associate"
  },

  {
    id: "05",
    title: "TCS Ninja",
    lesson: 8,
    students: 12.5,
    rating: 5.9,
    imgUrl: ninja,
    subExamName: "TCS Ninja"
  }
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Popular Courses</h2>
                <p>
                Ace your exams with effective study strategies! Set clear goals, practice regularly, and maintain a healthy balance for success.
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6" >
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;