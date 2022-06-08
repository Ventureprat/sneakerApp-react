import { useState } from "react";
import previousArrow from "../../images/icon-previous.svg";
import nextArrow from "../../images/icon-next.svg";

import "./PhotoSlides.css";

import product1 from "../../images/image-product-1.jpg";
import product2 from "../../images/image-product-2.jpg";
import product3 from "../../images/image-product-3.jpg";
import product4 from "../../images/image-product-4.jpg";

export default function PhotoSlides() {
  let arrImages = [product1, product2, product3, product4];

  const [imageInd, setImageInd] = useState(0);
  const [etarget, setETarget] = useState();

  const [showIMG, setShowIMG] = useState(0);

  const moveRight = () => {
    setImageInd((prev) => {
      if (prev === 3) {
        return 0;
      }
      return prev + 1;
    });
  };
  const moveLeft = () => {
    setImageInd((prev) => {
      if (prev === 0) {
        return 3;
      }
      return prev - 1;
    });
  };

  let ind1 = 0;

  return (
    <div className="photoSlides">
      {/* For Mobile View - 376px */}

      <img
        src={arrImages[imageInd]}
        alt="Sneaker Image"
        className="photoSlides-imageSlides"
      />
      {/* For Desktop View - Image Slides */}

      <img
        src={arrImages[showIMG]}
        alt="Sneaker Image"
        className="photoSlides-imageSlides-DV"
      />
      <div className="photoSlides-soloImages">
        {arrImages.map((image, ind) => {
          return (
            <img
              key={ind}
              src={image}
              alt="Sneaker images"
              className="photoSlides-image"
              onClick={(e) => {
                setShowIMG(ind);
                e.target.className += " photoSlides-activeClass";
                if (ind !== ind1) {
                  setETarget(e);

                  if (etarget != undefined)
                    etarget.target.className = "photoSlides-image";

                  ind1 = ind;
                }
              }}
            />
          );
        })}
      </div>
      <div
        className="photoSlides-arrow photoSlides-rightArrow"
        onClick={moveRight}
      >
        <img src={nextArrow} alt="nextArrow" />
      </div>
      <div
        className="photoSlides-arrow photoSlides-leftArrow"
        onClick={moveLeft}
      >
        <img src={previousArrow} alt="previousArrow" />
      </div>
    </div>
  );
}
