import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './testSeriesDetails.css';
import { freeCourseData } from '../components/Free-course-section/FreeCourse';
import testImage from '../assets/images/test_series_pack.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStarHalf} from '@fortawesome/free-solid-svg-icons';
import line from "../assets/images/line.png";
import Faq from '../components/Faq/Faq.js';


export const TestSeriesDetails = () => {
    const { subExamName } = useParams();
    const [selectedSection, setSelectedSection] = useState(null);
    const [selectedValidity, setSelectedValidity] = useState("1 month");
    const [discountedPrice, setDiscountedPrice] = useState(0);

    // Fetch course and exam data
    const subExamData = freeCourseData
        .flatMap(course => Object.values(course.exams).flat())
        .find(subExam => subExam.name === subExamName);

    const courseData = freeCourseData.find(course => course.id === "01"); // Adjust id as necessary

    useEffect(() => {
        if (subExamData && subExamData.sections.length > 0) {
            setSelectedSection(subExamData.sections[0]);
        }
    }, [subExamData]);

    // Calculate the discounted price based on selected validity
    useEffect(() => {
        if (courseData) {
            const originalPrice = courseData.prices[selectedValidity];
            const discount = courseData.discount[selectedValidity];
            const discounted = originalPrice - (originalPrice * discount / 100);
            setDiscountedPrice(discounted);
        }
    }, [selectedValidity, courseData]);

    const handleSectionClick = (section) => {
        setSelectedSection(section);
    };

    const handleValidityChange = (event) => {
        setSelectedValidity(event.target.value);
    };

    return (
        <div>
            <div className="test-series-details-container">
                <div className="online-test-series">
                    <h3>{subExamData?.name}</h3>
                    <h1>ONLINE TEST SERIES</h1>
                    <img src={line} width={300} height={40}></img>
                    
                </div>

                {/* Section buttons */}
                <div className="section-buttons">
                    {subExamData?.sections.map((section, index) => (
                        <button
                            key={index}
                            className={`section-btn ${selectedSection === section ? 'active' : ''}`}
                            onClick={() => handleSectionClick(section)}
                        >
                            {section}
                        </button>
                    ))}
                </div>

                {/* Test series list for the selected section */}
                {selectedSection && (
                    <div className="test-series-list">
                        <h3>{selectedSection} Tests</h3>
                        <ul>
                            {[...Array(subExamData.testSeries[selectedSection])].map((_, i) => (
                                <div key={i} className="test-series-item">
                                    {selectedSection} Test - {i + 1}
                                    <button className="start-test-btn">Start Test</button>
                                </div>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* Amount section - placed right below the test-series-list */}
            <div className="amount-section">
                <h1 className="text-center">Unlock Test Packages on 75% Discount</h1>
                <p className="text-center">Do yourself a favor, start practicing more with India's Best Online Test Series</p>
                <div className="outer">
                    <div className="inner">
                        <img src={testImage} alt="Test Series Package" />
                        <div className="month-display">
                            <h6>TEST SERIES</h6>
                            <p>Validity :</p>
                            <select className="drop-down" value={selectedValidity} onChange={handleValidityChange}>
                                <option value="1 month">1 month</option>
                                <option value="3 months">3 months</option>
                                <option value="6 months">6 months</option>
                                <option value="1 year">1 year</option>
                            </select>
                        </div>

                        {/* Display calculated amount */}
                        <div className="amount-display">
                            <p className='price'>₹{Math.floor(discountedPrice)}/month</p>
                            <p className='discount'>({courseData?.discount[selectedValidity]} % off)</p>
                            <p className='ogprice'>₹{courseData?.prices[selectedValidity]}/month</p>
                        </div>

                        <div className='rprice-display'>
                            <p className='rprice'>-₹{courseData?.rprice[selectedValidity]}.00</p>
                        </div>
                    </div>

                    <div className='purchase-section'>
                        <div className='purchase-1'>
                            <p className='first'>Packages Includes</p>
                            <p className='second'>Test Series</p>
                        </div>

                        <div className='purchase-2'>
                            <div className='purchase_21'>
                                <p className='sub-total'>Sub-total</p>
                                <p className='sub-total'>₹{Math.floor(discountedPrice)}</p>
                                <p className=''>-₹{courseData?.rprice[selectedValidity]}.00</p>
                            </div>
                            <div className='purchase_22'>
                                <p className='sub-total'>----------------------------------------------------------------------------</p>
                            </div>
                            <div className='purchase_23'>
                                <p className='total-amount'>TOTAL AMOUNT</p>
                                <p className='amount'>₹{Math.floor(discountedPrice)}</p>
                                <button>Buy now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='key-features'>
                <div className='features'>
                    <h2>Key Features</h2>

                    <div className='feature'>
                        <div className='feat'>
                            <p> <FontAwesomeIcon icon={faStarHalf} style={{color: "#FFD43B",}} />Trusted by 4,042 Students</p>
                            <p className='second'><FontAwesomeIcon icon={faStarHalf} style={{color: "#FFD43B",}} />Most Relevant Exam Questions</p>
                            <p className='second'><FontAwesomeIcon icon={faStarHalf} style={{color: "#FFD43B",}} />Exam-centric Robust Quality Content</p>
                        </div>
                        <div className='feat'>
                            <p ><FontAwesomeIcon icon={faStarHalf} style={{color: "#FFD43B",}} />Increase Selection Chances by 16X</p>
                            <p className='second'><FontAwesomeIcon icon={faStarHalf} style={{color: "#FFD43B",}} />Detailed and Accurate Explanations to Each Question</p>
                        
                        </div>
                        <div className='feat'>
                            <p ><FontAwesomeIcon icon={faStarHalf} style={{color: "#FFD43B",}} />Performance Analysis with State & All India Rank</p>
                            <p className='second'><FontAwesomeIcon icon={faStarHalf} style={{color: "#FFD43B",}} />Real-time Test Experience</p>
                        
                        </div>
                    </div>
                    
    
                </div>
            </div>
            <Faq></Faq>
        </div>
    );
};
