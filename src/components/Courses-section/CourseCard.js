import React from "react";
import {motion} from "framer-motion"
import { useNavigate } from "react-router-dom";

const CourseCard = (props) => {
  const { id, imgUrl, title, lesson, students, rating, subExamName } = props.item;
  const navigate = useNavigate()

  const cardVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y:0}
  }

  const handleClick = () => {
    navigate(`/test-series/${subExamName}`, {
      state: { selectedSubExam: subExamName}, // Pass subExam details to the new route
    })
  }
  
  return (
    <motion.div 
      className="single__course__item"
      initial="hidden"
      whileInView="visible"
      variants={cardVariants}
      transition={{duration: 1, ease: "easeInOut"}}
      onClick={handleClick}
      style={{cursor: "pointer"}} >

      <div className="course__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="course__details">
        <h6 className="course__title mb-4">{title}</h6>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="lesson d-flex align-items-center gap-1">
            <i class="ri-book-open-line"></i> {lesson} Lessons
          </p>

          <p className="students d-flex align-items-center gap-1">
            <i class="ri-user-line"></i> {students}K
          </p>
        </div>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="rating d-flex align-items-center gap-1">
            <i class="ri-star-fill"></i> {rating}K
          </p>

          <p className="enroll d-flex align-items-center gap-1">
            <a href="#"> Enroll Now</a>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;