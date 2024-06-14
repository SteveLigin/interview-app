import React from "react";
import "./navbar.css";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import flag from "../../assets/oman-flag.svg";
import logo from "../../assets/logoallah.png";

export default function Navabar() {
  return (
    <nav className="navbar">
      <div className="navbarLeft">
        <div className="navbarInfoOne">
          <p className="navbarPara">
            <CallIcon className="callIcon" />
            (+968) 24702666
          </p>
          <p className="navbarPara">
            <EmailIcon className="callIcon" /> info@alhabib.om
          </p>
        </div>
        <div className="navbarInfoTwo">
          <img src={flag} alt="" className="navBarImg" />
          <p>العربية</p>
        </div>
      </div>

      <div className="navbarRight">
        <div className="navbarLogos">
          <img src={logo} alt="" />
        </div>
        <ul className="navbarLists">
          <li className="navbarList">Who We Are</li>
          <li className="navbarList">
            What We Do <ExpandMoreIcon className="expandIcon" />
          </li>
          <li className="navbarList">
            Properties <ExpandMoreIcon className="expandIcon"  />
          </li>
          <li className="navbarList">CSR</li>
          <li className="navbarList">Media Center</li>
          <li className="navbarList">Blogs</li>
          <li className="navbarList">Contact</li>
          <button className="nabarBtn">Login / Register</button>
        </ul>
      </div>
    </nav>
  );
}
