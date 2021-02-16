import React from "react";
import sidebarlogo from "../images/sidebarlogo.svg";
import home from "../images/home.svg";
import { Link } from "react-router-dom";
import about from "../images/about.svg";
import skills from "../images/skill.svg";
import contact from "../images/contact.svg";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div></div>
      <img className="sidebar_logo" src={sidebarlogo} alt="cyphen-logo" />
      <div className="sidebar_icon">
        {" "}
        <nav className="sidebar_icon_nav">
          <Link to="/home">
            <div className="sidebar-all-icons">
              <img className="homeicons" src={home} alt="home-icon" />
            </div>
          </Link>
          <Link to="/about">
            <div className="sidebar-all-icons">
              <img className="abouticon" src={about} alt="" />
            </div>
          </Link>
          <Link to="/skills">
            <div className="sidebar-all-icons">
              <img className="skillsicon" src={skills} />
            </div>
          </Link>
          <Link to="/contact">
            <div className="sidebar-all-icons">
              <img className="skillsicon" src={contact} />
            </div>
          </Link>
          {/* <Link to="/works">
            <div className="sidebar-all-icons">
              <img className="skillsicon" src={skills} />
            </div>
          </Link> */}
        </nav>
      </div>
      <div className="sidebar_links"></div>
      <div className="sidebar_social"></div>
    </div>
  );
};

export default Sidebar;
