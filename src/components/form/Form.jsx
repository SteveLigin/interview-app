import React from "react";
import "./form.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ControlPointIcon from '@mui/icons-material/ControlPoint';


export default function Form() {
  return (
    <div className="form">
      <div className="formBtn">
        <button className="formBluebtn">For Rent</button>
        For Sale
      </div>

      <div className="formContainer">
        <div className="formContentOne">
          <div className="formTypes">
            <p>Types</p>
            <h3>All Types <ArrowDropDownIcon style={{ cursor: "pointer" }} /></h3>
          </div>
          <div className="formRightBorder"></div>
          <div className="formTypes">
            <p>Types</p>
            <h3> All Cities <ArrowDropDownIcon style={{ cursor: "pointer" }} /></h3>
          </div>
        </div>
        <div className="formContenTwo">
          <div className="formTypes">
            <p>Areas</p>
            <h3>All Areas <ArrowDropDownIcon style={{ cursor: "pointer" }} /></h3>
          </div>
          <div className="formRightBorder"></div>
          <div className="formTypes">
            <p>Bedrooms</p>
            <h3>01 <ArrowDropDownIcon style={{ cursor: "pointer" }} /></h3>
          </div>
          <div className="formRightBorder"></div>
          <div className="formTypes">
            <p>Bath</p>
            <h3> 01 <ArrowDropDownIcon style={{ cursor: "pointer" }} /></h3>
          </div>
        </div>
        <div className="formPriceRange">
          <p>Price range</p>
          <h3>OMR 0 to OMR 5,000</h3>
        </div>
        <div className="formSlider">
          <div>
            <input type="range" min="0" max="100" value="70" className="formRange" />
          </div>

        </div>
        <div className="formAdvanced">
          <h3><ControlPointIcon className="controlIcon" />Advanced Search</h3>
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}
