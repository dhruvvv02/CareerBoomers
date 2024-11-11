import React, { useEffect, useRef, useState } from "react";
import { Container } from "reactstrap";
import "./header.css";
import logo from '../../assets/images/logo.png';
import { useNavigate } from "react-router-dom";
import ActivationModal from "./ActivationModal";

const navLinks = [
  { display: "About", url: "#about-us" },  // Change URL to target the About Us section
  { display: "Courses", url: "#courses" },
];

const Header = () => {
  const menuRef = useRef();
  const headerRef = useRef();
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false)

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  const handleLogoClick = () => {
    navigate("/"); // Redirect to the homepage
  };

  const handleAboutClick = () => {
    // Scroll to the "About Us" section
    const aboutSection = document.getElementById("about-us");
    if (aboutSection) {
      console.log("found")
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const scrollY = window.scrollY;
        if (scrollY > 0) {
          headerRef.current.classList.add("move-up");
        } else {
          headerRef.current.classList.remove("move-up");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
            <h2 className="d-flex align-items-center gap-1">
              <img src={logo} width={45} height={35} className="" alt="Logo" />
              CareerBoomers
            </h2>
          </div>
          <p onClick={() => setModalOpen(true)} className="activation-key-p">
                Activation Key
          </p>

          <div className="nav d-flex align-items-center gap-5">
        
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url} onClick={item.display === "About" ? handleAboutClick : null}>
                      {item.display}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i className="ri-phone-line"></i> +91 9301067260
              </p>
      
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
      {isModalOpen && <ActivationModal onClose={() => setModalOpen(false)} />}
    </header>
  );
};

export default Header;
