import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosCloseCircle } from "react-icons/io";
import Carousel from "react-bootstrap/Carousel";
import "../navbarcarousel/caro.css";


function Carouseltop() {
  const [showcaro, setShowcaro] = useState(true);

  function handlecaro() {
    setShowcaro(!showcaro);
  }

  return (
    showcaro && (
      <div className="container zindex" style={{ minHeight: "150px", width: "1100px", position: "relative" }}>
        <Carousel controls={false}>
          <Carousel.Item interval={1000}>
            <img
              src="https://cdn1.byjus.com/wp-content/uploads/2024/02/JEE-Main-2024-Question-Papers-updated-homepage-desktop-feb9.webp"
              alt="First slide"
              
              
            />
          </Carousel.Item>
          <Carousel.Item interval={500} className="carosize">
            <img
              src="https://cdn1.byjus.com/wp-content/uploads/2024/02/marathon-classes-homepage-desktop-feb25.webp"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://cdn1.byjus.com/wp-content/uploads/2024/02/updated-jee-main-topper-2024-homepage-top-desktop-feb13.webp"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <p className="caroclosebtn" onClick={handlecaro}>
          <IoIosCloseCircle />
        </p>
      </div>
    )
  );
}

export default Carouseltop;

