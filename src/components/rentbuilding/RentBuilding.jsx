import React, { useState } from "react";
import "./rentbuilding.css";
import rent1 from "../../assets/rent1.jfif";
import { TbHeart } from "react-icons/tb";
import { TbSquareToggle } from "react-icons/tb";
import rent2 from "../../assets/rent2.jfif";
import rent3 from "../../assets/rent3.jfif";
import rent4 from "../../assets/rent4.jfif";
import rent5 from "../../assets/rent5.jfif";
import rent6 from "../../assets/rent6.jfif";
import rent7 from "../../assets/rent7.jfif";
import rent8 from "../../assets/rent8.jfif";

export default function RentBuilding() {
  const rentImage = [
    {
      id: 1,
      rentPic: rent1,
    },
    {
      id: 2,
      rentPic: rent2,
    },
    {
      id: 3,
      rentPic: rent3,
    },
    {
      id: 4,
      rentPic: rent4,
    },
    {
      id: 5,
      rentPic: rent5,
    },
    {
      id: 6,
      rentPic: rent6,
    },
    {
      id: 7,
      rentPic: rent7,
    },
    {
      id: 8,
      rentPic: rent8,
    },
  ];
  const [userImage] = useState(rentImage);
  return (
    <div className="rent">
      <div className="rentFeature">
        <h1>Featured For Rent</h1>
        <button>See All Properties </button>
      </div>
      <div className="rentSplit">
        {userImage.map((item) => (
          <div className="rentImages" key={item.id}>
            <img src={item.rentPic} alt="Rent" className="rentImage" />
            <span className="rentSpanLeft">Featured</span>
            <span className="rentSpanRight">For Rent</span>
            <TbHeart className="rentIcon rentIconOne" />
            <TbSquareToggle className="rentIcon rentIconTwo" />
            <div className="rentCategory">
              <h5>Al Mir Building – Showroom For Rent...</h5>
              <p>
                OMR 1,500 <span> / per month</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
