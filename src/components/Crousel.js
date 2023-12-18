import React from "react";
import img1 from "../images/img_1.jpg";
import img2 from "../images/img_2.jpg";
import img3 from "../images/img_3.jpg";
import img4 from "../images/img_4.jpg";

function Crousel() {
  const noOfImages = 4;
  let counter = 1;
  const handleClick = (event) => {
    if (event.target.className === "nextBtn") {
      if (counter >= noOfImages) {
        counter = 1;
      } else {
        counter++;
      }
      document.querySelector(`.img${counter}`).style.opacity = 1;
      let index = 1;
      while (index <= noOfImages) {
        if (index === counter) {
          index++;
          continue;
        } else {
          document.querySelector(`.img${index}`).style.opacity = 0;
          index++;
        }
      }
    } else {
      if (counter <= 1) {
        counter = noOfImages;
      } else {
        counter--;
      }
      document.querySelector(`.img${counter}`).style.opacity = 1;
      let index = 1;
      while (index <= noOfImages) {
        if (index === counter) {
          index++;
          continue;
        } else {
          document.querySelector(`.img${index}`).style.opacity = 0;
          index++;
        }
      }
    }
  };
  return (
    <>
      <div className="main">
        <img className="slide img1" src={img1} alt="image1" />
        <img className="slide img2" src={img2} alt="image1" />
        <img className="slide img3" src={img3} alt="image1" />
        <img className="slide img4" src={img4} alt="image1" />
        <button className="prevBtn" onClick={handleClick}>
          &lt;
        </button>
        <button className="nextBtn" onClick={handleClick}>
          &gt;
        </button>
      </div>
    </>
  );
}

export default Crousel;
