import React, { Fragment } from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import CompanySection from "../components/Company-section/Company";

import AboutUs from "../components/About-us/AboutUs";
import Courses from "../components/Courses-section/Courses";
import ChooseUs from "../components/Choose-Us/ChooseUs";
import Features from "../components/Feature-Section/Features";
import FreeCourse from "../components/Free-course-section/FreeCourse";

import Testimonials from "../components/Testimonials/Testimonials";

import Newsletter from "../components/NewsLetter/Newsletter";
import Faq from "../components/Faq/Faq";

const Home = () => {
  return (
    <Fragment>
      
      <HeroSection />
      <CompanySection />
      <Courses />
      <FreeCourse />
      <AboutUs/>
      <ChooseUs />
      <Features />
      <Testimonials />
      <Faq></Faq>
      <Newsletter />

    </Fragment>
  );
};

export default Home;