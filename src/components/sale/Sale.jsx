import React from 'react';
import "./sale.css";
import map1 from"../../assets/map1.jfif";
import  map2 from "../../assets/map2.jfif";
import map3 from  "../../assets/map3.jfif";
import { TbHeart } from "react-icons/tb";
import { TbSquareToggle } from "react-icons/tb";
import { useState } from 'react';


export default function Sale() {
    const saleImage = [
        {
            id: 1,
            salePic: map1

        },
        {
            id: 2,
            salePic: map2
        },
        {
            id: 3,
            salePic: map3,
        }
    ]
    const [userSaleIMage] = useState(saleImage);
  return (
    <div className="sale">
    <div className="saleFeature">
          <h1>Featured For sale</h1>
          <button>See All Properties </button>
      </div>
  <div className="saleSplit">
      {userSaleIMage.map((item) => (
          <div className="saleImages" key={item.id}>
              <img src={item.salePic} alt="sale" className="saleImage" />
              <span className="saleSpanLeft">Featured</span>
              <span className="saleSpanRight">For sale</span>
              <TbHeart className="saleIcon saleIconOne" />
              <TbSquareToggle className="saleIcon saleIconTwo" />
              <div className="saleCategory">
                  <h5>Distinctive residential lands for sale in Sohar / Al...</h5>
                  <p>OMR 1,500 <span> / per month</span></p>
              </div>
          </div>
      ))}
  </div>

</div>
  )
}
