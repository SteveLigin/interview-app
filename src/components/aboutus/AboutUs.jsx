import React from "react";
import Chicke from "../../assets/2.jpg";
import years from "../../assets/45years.PNG";
import location from "../../assets/Location.PNG";
import "./aboutus.css";

const Aboutus = () => {
  return (
    <div>
      <div className="aboutus">
        <div className="Aboutusimage">
          <img className="Aboutusimg1" src={Chicke} alt="" />
          <img className="Aboutusimg2" src={years} alt="" />
          <img className="Aboutusimg3" src={location} alt="" />
        </div>
        <div className="aboutusBox">
          <b className="AboutusHeading">About Us</b> <br />
          <br />
          <p className="aboutusPara">
            The largest and only one-stop-shop for the complete range of real
            estate products and services in Oman, our team of over 150 skilled
            and experienced professionals are always there to help you with real
            estate solutions.
          </p>
          <br />
          <br />
          <p className="aboutusPara">
            We leverage our decades of experience, expertise and knowledge in
            different areas to bring you greater value. Whatever your real
            estate requirements, we are there to offer you seamless and
            integrated service that is second to none.
          </p>
          <br />
          <button className="AboutusBut">Know More About Us</button>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
