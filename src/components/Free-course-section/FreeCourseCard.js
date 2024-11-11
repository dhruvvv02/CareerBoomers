import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useBreadcrumb } from "../CourseDetails/BreadcrumbContext";

const FreeCourseCard = (props) => {
  const { imgUrl, title, students, rating } = props.item;
  
  const { handleMe } = props

  const handleClick = (event) => {
    event.preventDefault()
    if (handleMe) {
      handleMe(title)
    }
  }

  const handleNavigation = () => {
    //setBreadcrum(['Home', title])
  }

  return (
    <Link to={`/course/${title}`} className="single__free__course no-link" onClick={handleMe}>
      <div className="free__course__img">
        <img src={imgUrl} alt={title} className="w-100" />
        <button className="btn free__btn">Enroll now</button>
      </div>

      <div className="free__course__details">
        <h6>{title}</h6>

        <div className=" d-flex align-items-center justify-content-center gap-2">
          <span className=" d-flex align-items-center gap-2">
            <i class="ri-user-line"></i> {students}k
          </span>

          <span className=" d-flex align-items-center gap-2">
            <i class="ri-star-fill"></i> {rating}k
          </span>
        </div>
      </div>
    </Link>
  );
};

export default FreeCourseCard;