import React from "react";
import previousArrow from "../../images/icon-previous.svg";
import nextArrow from "../../images/icon-next.svg";

import "./PhotoSlides.css";

// import product1 from '../images/image-product-1.jpg'
// import product2 from '../images/image-product-2.jpg'
// import product3 from '../images/image-product-3.jpg'
// import product4 from '../images/image-product-4.jpg'

export default function PhotoSlides() {
  return (
    <div className="photoSlides">
      <div className="photoSlides-arrow photoSlides-rightArrow">
        <img src={nextArrow} alt="nextArrow" />
      </div>
      <div className="photoSlides-arrow photoSlides-leftArrow">
        <img src={previousArrow} alt="previousArrow" />
      </div>
    </div>
  );
}
