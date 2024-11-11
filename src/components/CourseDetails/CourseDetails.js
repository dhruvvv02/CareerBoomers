import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import '../CourseDetails/courseDetails.css';
import { freeCourseData } from '../Free-course-section/FreeCourse';
import line from "../../assets/images/line.png";
import back from "../../assets/images/arrow-left.png";

export const CourseDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [breadcrumb, setBreadcrumb] = useState(['Home']);
    const [selectedExam, setSelectedExam] = useState(null);
    
    // Find course based on the title/id
    const course = freeCourseData.find(course => course.title === id);
    const exams = course?.exams || {};

    // Update breadcrumb when course or exam is selected
    useEffect(() => {
        if (course) {
            const newBreadcrumb = selectedExam
                ? ['Home', course.title, selectedExam]
                : ['Home', course.title];
            setBreadcrumb(newBreadcrumb);
        }
    }, [course, selectedExam]);

    const handleExamClick = (examName) => {
        setSelectedExam(examName);
    };

    const handleSubExamClick = (subExam) => {
        // Redirect to TestSeriesDetails page with subExam details
        navigate(`/test-series/${subExam.name}`, {
            state: { selectedSubExam: subExam }, // Pass subExam details to the new route
        });
    };

    return (
        <div className='course-details-container'>
            <div className='navigation-details'>
                <p>
                    {breadcrumb.map((crumb, index) => (
                        <span key={index}>
                            {index > 0 && ' > '}
                            {index === breadcrumb.length - 1 ? (
                                <span className='current-crumb'>{crumb}</span>
                            ) : (
                                <Link to={crumb === 'Home' ? '/' : `/course/${crumb.toLowerCase().replace(/\s+/g, '-')}`}>
                                    {crumb}
                                </Link>
                            )}
                        </span>
                    ))}
                </p>
            </div>

            <div className='course-details'>
                <h1 className='text-align-center'>{course?.title}</h1>
                <img src={line} width={400} height={40}></img>
                <div className="exam-cards">
                    {!selectedExam ? (
                        // Display exam cards if no exam is selected
                        Object.keys(exams).map((examName) => (
                            <div
                                key={examName}
                                className="exam-card"
                                onClick={() => handleExamClick(examName)}
                            >
                                {examName}
                            </div>
                        ))
                    ) : (
                        // Display sub-exams as cards when an exam is selected
                        <div className="sub-exam-cards">
                            {exams[selectedExam].map((subExam) => (
                                <div
                                    key={subExam.name}
                                    className="sub-exam-card"
                                    onClick={() => handleSubExamClick(subExam)}
                                >
                                    {subExam.name}
                                </div>
                            ))}
                            <button className='back-btn' onClick={() => setSelectedExam(null)}>
                                <img src={back} width={35} height={35}></img>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
