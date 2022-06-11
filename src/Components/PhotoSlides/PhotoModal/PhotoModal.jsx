import { useState } from "react";

import "./PhotoModal.css";

import closeBtn from "../../../images/icon-close.svg";
import leftArrow from "../../../images/icon-previous.svg";
import rightArrow from "../../../images/icon-next.svg";

import product1 from "../../../images/image-product-1.jpg";
import product2 from "../../../images/image-product-2.jpg";
import product3 from "../../../images/image-product-3.jpg";
import product4 from "../../../images/image-product-4.jpg";

export default function PhotoModal({ showModalBool, modalShowFunc }) {
  let arrImages = [product1, product2, product3, product4];

  const [etarget, setETarget] = useState();
  const [showImage, setShowImage] = useState(0);

  const moveRight = () => {
    setShowImage((prev) => {
      if (prev === 3) {
        return 0;
      }
      return prev + 1;
    });
  };
  const moveLeft = () => {
    setShowImage((prev) => {
      if (prev === 0) {
        return 3;
      }
      return prev - 1;
    });
  };

  let ind1 = 0;

  if (showModalBool) {
    return (
      <div className="photoModal-container">
        <div className="photoModal">
          <img
            src={arrImages[showImage]}
            alt="Sneaker Image"
            className="photoModal-imageSlides-DV"
          />
          <div className="photoModal-soloImages">
            {arrImages.map((image, ind) => {
              return (
                <img
                  key={ind}
                  src={image}
                  alt="Sneaker images"
                  className="photoModal-image"
                  onClick={(e) => {
                    setShowImage(ind);
                    e.target.className += " photoModal-activeClass";
                    if (ind !== ind1) {
                      setETarget(e);

                      if (etarget != undefined)
                        etarget.target.className = "photoModal-image";

                      ind1 = ind;
                    }
                  }}
                />
              );
            })}
            <img
              src={closeBtn}
              alt="icon-closeBtn"
              className="photoModal-closeBtn"
              onClick={modalShowFunc}
            />
            <img
              src={leftArrow}
              alt="icon-leftArrow"
              className="photoModal-arrow photoModal-leftArrow"
              onClick={moveLeft}
            />
            <img
              src={rightArrow}
              alt="icon-rightArrow"
              className="photoModal-arrow photoModal-rightArrow"
              onClick={moveRight}
            />
          </div>
        </div>
      </div>
    );
  }
  return null;
}
