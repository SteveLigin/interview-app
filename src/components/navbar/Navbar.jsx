import React, { useState } from "react";
import "./navbar.css";
import { MdPhone, MdEmail } from "react-icons/md";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import flag from "../../assets/oman-flag.svg";
import logo from "../../assets/logoallah.png";
import { IoReorderThree } from "react-icons/io5";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbarLeft">
        <div className="navbarInfoOne">
          <p className="navbarPara">
            <MdPhone className="callIcon" />
            (+968) 24702666
          </p>
          <p className="navbarPara">
            <MdEmail className="callIcon" /> info@alhabib.om
          </p>
        </div>
        <div className="navbarInfoTwo">
          <img src={flag} alt="Oman Flag" className="navBarImg" />
          <p>العربية</p>
        </div>
      </div>

      <div className="navbarRight">
        <div className="navbarLogos">
          <img src={logo} alt="Logo" />
        </div>
        <IoReorderThree className="menuIcon" onClick={toggleMenu} />
        <ul className={`navbarLists ${isMenuOpen ? "active" : ""}`}>
          <li className="navbarList">Who We Are</li>
          <li className="navbarList">
            What We Do <ExpandMoreIcon className="expandIcon" />
          </li>
          <li className="navbarList">
            Properties <ExpandMoreIcon className="expandIcon" />
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
