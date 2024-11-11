import React, { useRef, useState } from "react";
import { Container, Row, Col } from "reactstrap";

import courseImg01 from "../../assets/images/placement-paper.jpg";
import courseImg02 from "../../assets/images/AI.jpg";
import courseImg03 from "../../assets/images/IT.jpg";
import courseImg04 from "../../assets/images/certification-courses.jpg";
import courseImg05 from "../../assets/images/graduate-eng.jpg";
import courseImg06 from "../../assets/images/proff-course.jpg";
import courseImg07 from "../../assets/images/psu.jpg";
import courseImg08 from "../../assets/images/ML.jpg";
import courseImg09 from "../../assets/images/banking.jpg";
import courseImg10 from "../../assets/images/govt-exams.jpg";

import FreeCourseCard from "./FreeCourseCard";

import "./free-course.css";

export const freeCourseData = [
  {
    id: "01",
    title : "IT Placement Papers",
    imgUrl: courseImg01,
    students: 5.3,
    rating: 1.7,
    prices: {
      "1 month": 999,
      "3 months": 533,
      "6 months": 333,
      "1 year": 326
    },
    discount:{
      "1 month": 50,
      "3 months": 56,
      "6 months": 60,
      "1 year": 75
    },
    rprice: {
      "1 month": 500.00,
      "3 months": 900.00,
      "6 months": 1200.00,
      "1 year": 3000.00
    },
    exams: {
      "Placement Papers": [
        {
          name: "Google",
          sections: ["Analytical Reasoning", "General Aptitude", "Technical", "Verbal Reasoning"],
          testSeries: {
            "Analytical Reasoning": 5,
            "General Aptitude": 3,
            "Technical": 4,
            "Verbal Reasoning": 2
          }
        },
        {  
          name: "Amazon",
          sections: ["Analytical Reasoning", "General Aptitude", "Technical", "Verbal Reasoning"],
          testSeries: {
            "Analytical Reasoning": 6,
            "General Aptitude": 4,
            "Technical": 3,
            "Verbal Reasoning": 5
          }
        },
        {
         name: "HP",
         sections: ["Mock"],
         testSeries: {
          "Mock": 5,
        }
        },
        {
          name: "Infosys",
          sections: ["Practice", "Quantitative Aptitude", "Verbal Aptitude", "Logical Reasoning", "Computer Fundamentals", "Programming Ability"],
          testSeries: {
            "Practice": 10,
            "Quantitative Aptitude": 8,
            "Verbal Aptitude": 8,
            "Logical Reasoning": 8,
            "Computer Fundamentals" : 3,
            "Programming Ability" : 3
          }
        },
        {
          name: "Amdocs",
          sections: ["Analytical Aptitude", "Quantitative Aptitude", "Technical"],
          testSeries: {
            "Analytical Aptitude": 8,
            "Quantitative Aptitude": 8,
            "Technical" : 10
          }
        },
        {
          name: "TCS National Qualifier Test(NQT)",
          sections: ["Mock", "Sectional"],
          testSeries: {
            "Mock" : 8,
            "Sectional" : 5
          }
        },
        {
          name: "TCS Ninja",
          sections: ["Mock", "Sectional"],
          testSeries: {
            "Mock" : 10,
            "Sectional" : 4
          }
        },
        {
          name: "HCL",
          sections: ["Practice"],
          testSeries : {
            "Practice" : 6
          }
        },
        {
          name: "Ericsson",
          sections: ["Practice"],
          testSeries : {
            "Practice" : 4
          }
        },
        {
          name: "Mu Sigma",
          sections: ["Logical Reasoning", "Numerical Reasoning", "Technical", "Verbal Reasoning"],
          testSeries : {
            "Logical Reasoning" : 11,
            "Numerical Reasoning" : 14,
            "Technical" : 4,
            "Verbal Reasoning" : 12
          }
        },
        {
          name: "Maruti Suzuki",
          sections: ["Analytical Reasoning", "Core Domain Assessment", "Quantitative Reasoning"],
          testSeries : {
            "Analytical Reasoning" : 10,
            "Core Domain Assessment": 9,
            "Quantitative Reasoning" : 10
          }
        },
        {
          name: "Reliance Jio",
          sections: ["English", "Quantitative Aptitude", "Reasoning", "Technical"],
          testSeries : {
            "English" : 11,
            "Quantitative Aptitude" : 12,
            "Reasoning" : 11,
            "Technical" : 11
          }
        },
        {
          name: "CoCubes",
          sections: ["Mock", "Quantitative Aptitude", "Verbal Aptitude", "Logical Reasoning", "Computer Fundamentals", "Programming Ability"],
          testSeries: {
            "Mock": 10,
            "Quantitative Aptitude": 13,
            "Verbal Aptitude": 13,
            "Logical Reasoning": 13,
            "Computer Fundamentals" : 3,
            "Programming Ability" : 3
          }
        },
        {
          name: "Syntel",
          sections: ["Mock"],
          testSeries: {
            "Mock" : 3
          }
        },
        {
          name: "Hexaware",
          sections: ["Mock"],
          testSeries: {
            "Mock" : 2
          }
        },
        {
          name: "Tech Mahindra",
          sections: ["Mock"],
          testSeries: {
            "Mock" : 5
          }
        },
        {
          name: "Cognizant",
          sections: ["Mock", "Quantitative Aptitude", "Reasoning Ability", "Code Debugging", "Practice Papers"],
          testSeries : {
            "Mock" : 10,
            "Quantitative Aptitude" : 3,
            "Reasoning Ability" : 3,
            "Code Debugging" : 3,
            "Practice Papers" : 5
          }
        },
        {
          name: "Arcesium",
          sections: ["Mock"],
          testSeries : {
            "Mock" : 4
          }
        },
        {
          name: "NTT Data",
          sections: ["Mock"],
          testSeries : {
            "Mock" : 5
          }
        },
        {
          name: "Ashok Leyland",
          sections: ["Mock"],
          testSeries : {
            "Mock" : 3
          }
        },
        {
          name: "Wipro",
          sections: ["Mock", "Reasoning Ability", "Verbal Ability", "Quantitative Aptitude", "Practice"],
          testSeries : {
            "Mock" : 4,
            "Reasoning Ability" : 5,
            "Verbal Ability" : 5,
            "Quantitative Aptitude" : 5,
            "Practice" : 10
          }
        },
        {
          name: "IBM",
          sections: ["google", "Google", "GOOGLE"]
        },
        {
          name: "Accenture",
          sections: ["google", "Google", "GOOGLE"]
        },
        {
          name: "Larsen & Toubro",
          sections: ["google", "Google", "GOOGLE"]
        },
        {
          name: "Capgemini",
          sections: ["google", "Google", "GOOGLE"]
        },
      ],
          
      "Amazon Web Services (AWS)": [
        {
          name: "AWS Certified Developer Associate",
          sections: ["Mock"],
          testSeries : {
            "Mock" : 1
          }
        },
        {
          name: "AWS Certified Solutions Architect Associate",
          sections: ["Mock"],
          testSeries : {
            "Mock" : 16
          }
        },
        {
          name: "AWS SysOps Administrator Associate",
          sections: ["Mock"],
          testSeries : {
            "Mock" : 1
          }
        }
      ],

      "Programming Languages": [
        {
          name: "Python",
          sections: ["Mock"],
          testSeries: {
            "Mock": 6
          }
        },
        {
          name: "Java",
          sections: ["Java"],
          testSeries: {
            "Java" : 6
          }
        },
        {
          name: "C Language",
          sections: ["C Language"],
          testSeries: {
            "C Language" : 6
          }
        }
      ],

      "AMCAT": [
        {
          name: "Python",
          sections: ["Mock"],
          testSeries: {
            "Mock": 6
          }
        },
        {
          name: "Java",
          sections: ["Java"],
          testSeries: {
            "Java" : 6
          }
        },
        {
          name: "C Language",
          sections: ["C Language"],
          testSeries: {
            "C Language" : 6
          }
        }
      ],

      "eLitmus": [
        {
          name: "Python",
          sections: ["Mock"],
          testSeries: {
            "Mock": 6
          }
        },
        {
          name: "Java",
          sections: ["Java"],
          testSeries: {
            "Java" : 6
          }
        },
        {
          name: "C Language",
          sections: ["C Language"],
          testSeries: {
            "C Language" : 6
          }
        }
      ]
    }
  },
  {
    id: "02",
    title: "Artificial Intelligence",
    imgUrl: courseImg02,
    students: 5.3,
    rating: 1.7,
    exams: {
      "Data Engineering": ["Data Engineering with AWS", "Data Engineering with AZURE"]
      
    },
  },

  {
    id: "03",
    title: "Computer & Information Technology",
    imgUrl: courseImg03,
    students: 5.3,
    rating: 1.7,
    exams: {
      "MCA Entrance": ["BHU MCA Entrance","NIMCET (NIT)","MAH MCA CET","AP/TS ICET","TANCET MCA","JNU","GUJCET MCA","TNSF Consortium","BIT MCA Entrance"],
      "BCA Entrance": ["BCA"],
      "Android": ["Android"],
      "Computer Exams": ["Course On Computer Concepts (CCC)"],
      "Centre for Development of Advanced Computing (C-DAC)": ["C-DAC Project Manager"]
    },
  },

  {
    id: "04",
    title: "Professional Certification Courses",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 1.7,
    exams: {
      "IT Certificate Programs": ["IT Certificate Programs"]
    },
  },

  {
    id: "05",
    title: "Graduate Engineering",
    imgUrl: courseImg05,
    students: 5.3,
    rating: 1.7,
    exams: {
      "GATE": ["GATE Electronics", "GATE Computer Science"],
      "SSC JE": ["SSC Junior Engineer Civil","SSC Junior Engineer Mechanical"]
    },
  },

  {
    id: "06",
    title: "Professional Courses",
    imgUrl: courseImg06,
    students: 5.3,
    rating: 1.7,
    exams: {
      "Spoken English": ["Google","Amazon","HP","Infosys","Amdocs","TCS Ninja","HCL","Ericsson"],
      "English": ["AWS Certified Developer","AWS Certified Solutions"],
      "Computer Basics": ["MS Office", "MS Word"]
    },
  },

  {
    id: "07",
    title: "PSUs & Research",
    imgUrl: courseImg07,
    students: 5.3,
    rating: 1.7,
    exams: {
      "ICAR": ["Google","Amazon","HP","Infosys","Amdocs","TCS Ninja","HCL","Ericsson"],
      "DFCCIL": ["AWS Certified Developer","AWS Certified Solutions"],
    },
  },

  {
    id: "08",
    title: "Data Science & Machine Learning",
    imgUrl: courseImg08,
    students: 5.3,
    rating: 1.7,
    exams: {
      "Mathematics": ["Google","Amazon","HP","Infosys","Amdocs","TCS Ninja","HCL","Ericsson"],
      "Full Stack Data Science": ["AWS Certified Developer","AWS Certified Solutions"],
    },
  },
];

/*

  {
    id: "09",
    title: "Banking",
    imgUrl: courseImg09,
    students: 5.3,
    rating: 1.7,
    exams: {
      "Placement Papers": ["Google","Amazon","HP","Infosys","Amdocs","TCS Ninja","HCL","Ericsson"],
      "Amazon Web Services (AWS)": ["AWS Certified Developer","AWS Certified Solutions"],
    },
  },

  {
    id: "10",
    title: "Government Exams",
    imgUrl: courseImg10,
    students: 5.3,
    rating: 1.7,
    exams: {
      "Placement Papers": ["Google","Amazon","HP","Infosys","Amdocs","TCS Ninja","HCL","Ericsson"],
      "Amazon Web Services (AWS)": ["AWS Certified Developer","AWS Certified Solutions"],
    },
  },

  {
    id: "11",
    title: "SSC",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 1.7,
    exams: {
      "Placement Papers": ["Google","Amazon","HP","Infosys","Amdocs","TCS Ninja","HCL","Ericsson"],
      "Amazon Web Services (AWS)": ["AWS Certified Developer","AWS Certified Solutions"],
    },
  },

  {
    id: "12",
    title: "Medical",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 1.7,
    exams: {
      "Placement Papers": ["Google","Amazon","HP","Infosys","Amdocs","TCS Ninja","HCL","Ericsson"],
      "Amazon Web Services (AWS)": ["AWS Certified Developer","AWS Certified Solutions"],
    },
  },

  {
    id: "13",
    title: "Computer & Information Technology",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 1.7,
    exams: {
      "Placement Papers": ["Google","Amazon","HP","Infosys","Amdocs","TCS Ninja","HCL","Ericsson"],
      "Amazon Web Services (AWS)": ["AWS Certified Developer","AWS Certified Solutions"],
    },
  },

  {
    id: "14",
    title: "Professional Certification Courses",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 1.7,
    exams: {
      "Placement Papers": ["Google","Amazon","HP","Infosys","Amdocs","TCS Ninja","HCL","Ericsson"],
      "Amazon Web Services (AWS)": ["AWS Certified Developer","AWS Certified Solutions"],
    },
  },

  {
    id: "15",
    title: "Graduate Engineering",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 1.7,
    exams: {
      "Placement Papers": ["Google","Amazon","HP","Infosys","Amdocs","TCS Ninja","HCL","Ericsson"],
      "Amazon Web Services (AWS)": ["AWS Certified Developer","AWS Certified Solutions"],
    },
  },

  {
    id: "16",
    title: "Railway",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 1.7,
    exams: {
      "Placement Papers": ["Google","Amazon","HP","Infosys","Amdocs","TCS Ninja","HCL","Ericsson"],
      "Amazon Web Services (AWS)": ["AWS Certified Developer","AWS Certified Solutions"],
    },
  },

  {
    id: "17",
    title: "Professional Courses",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 1.7,
    exams: {
      "Placement Papers": ["Google","Amazon","HP","Infosys","Amdocs","TCS Ninja","HCL","Ericsson"],
      "Amazon Web Services (AWS)": ["AWS Certified Developer","AWS Certified Solutions"],
    },
  },

  {
    id: "18",
    title: "PSUs $ Research",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 1.7,
    exams: {
      "Placement Papers": ["Google","Amazon","HP","Infosys","Amdocs","TCS Ninja","HCL","Ericsson"],
      "Amazon Web Services (AWS)": ["AWS Certified Developer","AWS Certified Solutions"],
    },
  },

  {
    id: "19",
    title: "Finance",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 1.7,
    exams: {
      "Placement Papers": ["Google","Amazon","HP","Infosys","Amdocs","TCS Ninja","HCL","Ericsson"],
      "Amazon Web Services (AWS)": ["AWS Certified Developer","AWS Certified Solutions"],
    },
  },

  {
    id: "20",
    title: "Insurance",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 1.7,
    exams: {
      "Placement Papers": ["Google","Amazon","HP","Infosys","Amdocs","TCS Ninja","HCL","Ericsson"],
      "Amazon Web Services (AWS)": ["AWS Certified Developer","AWS Certified Solutions"],
    },
  },

  {
    id: "21",
    title: "School Level - All India",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 1.7,
    exams: {
      "Placement Papers": ["Google","Amazon","HP","Infosys","Amdocs","TCS Ninja","HCL","Ericsson"],
      "Amazon Web Services (AWS)": ["AWS Certified Developer","AWS Certified Solutions"],
    },
  },

  {
    id: "22",
    title: "School Level - State Board",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 1.7,
    exams: {
      "Placement Papers": ["Google","Amazon","HP","Infosys","Amdocs","TCS Ninja","HCL","Ericsson"],
      "Amazon Web Services (AWS)": ["AWS Certified Developer","AWS Certified Solutions"],
    },
  },

  {
    id: "23",
    title: "Foreign Education",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 1.7,
    exams: {
      "Placement Papers": ["Google","Amazon","HP","Infosys","Amdocs","TCS Ninja","HCL","Ericsson"],
      "Amazon Web Services (AWS)": ["AWS Certified Developer","AWS Certified Solutions"],
    },
  },

  {
    id: "24",
    title: "Designing",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 1.7,
    exams: {
      "Placement Papers": ["Google","Amazon","HP","Infosys","Amdocs","TCS Ninja","HCL","Ericsson"],
      "Amazon Web Services (AWS)": ["AWS Certified Developer","AWS Certified Solutions"],
    },
  },

  {
    id: "25",
    title: "Others",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 1.7,
    exams: {
      "Placement Papers": ["Google","Amazon","HP","Infosys","Amdocs","TCS Ninja","HCL","Ericsson"],
      "Amazon Web Services (AWS)": ["AWS Certified Developer","AWS Certified Solutions"],
    },
  },


];
*/


const FreeCourse = () => {
  const duplicatedCourses = [...freeCourseData, ...freeCourseData];
  const [selectedCourse, setSelectedCourse] = useState(null)
  const sliderRef = useRef(null)

  const handleCourseClick = (courseTitle) => {
    console.log("Course Clicked", courseTitle)
    const selected = duplicatedCourses.find(course => course.title === courseTitle)
    setSelectedCourse(selected)
  }

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="courses">
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">Explore Your Exams</h2>
          </Col>

          <div className="courses-slider">
            <button className="slider-button left" onClick={scrollLeft}>&lt;</button>
          
            <div className="free-courses-container" ref={sliderRef}>
              <div className="free-courses-track">
                {duplicatedCourses.map((item,index) => (
                  <FreeCourseCard key={index} item={item} handleMe={() => handleCourseClick(item.title)} />
                ))}
              </div>
            </div>

            <button className="slider-button right" onClick={scrollRight}>&gt;</button>
          </div>
          
        </Row>
        
      </Container>
    </section>
  );
};

export default FreeCourse;
