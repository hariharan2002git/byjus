import React from "react";
import "../cardsix/cardsix.css";
const Cardsix = () => {
  return (
    <>
        <div className="sixfontshead">
        <h1>Explore our learning Programs</h1>
        </div>

      <div className="cardsixm">
        <div className="cardsixcontent">
          <img
            src="https://cdn1.byjus.com/wp-content/uploads/2024/02/BEL_Hero_50k-scaled.webp"
            alt=""
            className="cardsiximg"
          />
          <p className="sixcon">LKG - Class 3 </p>
          <p className="textsmall">BYJU'S Early Learn Program </p>
         <p className="underlinesix"><a href="#">Read more..</a></p>
          
        </div>
        <div className="cardsixcontent">
          <img
            src="https://cdn1.byjus.com/wp-content/uploads/2024/02/BTLA_Hero_50kb.webp"
            alt=""
            className="cardsiximg"
          />
          <p className="sixcon">
            LKG - Class 3 
          
          </p>
          <p className="textsmall">  BYJU'S Early Learn Program</p>
         <p className="underlinesix"><a href="#">Read more..</a></p>
        </div>
        <div className="cardsixcontent">
          <img
            src="https://cdn1.byjus.com/wp-content/uploads/2024/02/LiveClasses_Hero_50kb.webp"
            alt=""
            className="cardsiximg"
          />
          <p className="sixcon">
            LKG - Class 3 
          </p>
          
          <p className="textsmall">  BYJU'S Early Learn Program</p>

         <p className="underlinesix"><a href="#">Read more..</a></p>

        </div>
        <div className="cardsixcontent">
          <img
            src="https://cdn1.byjus.com/wp-content/uploads/2024/02/Aakash_FoundationCourse.webp"
            alt=""
            className="cardsiximg"
          />
          <p className="sixcon">
            LKG - Class 3 
          </p>
          <p className="textsmall">
          BYJU'S Early Learn Program
            
          </p>
         <p className="underlinesix"><a href="#">Read more..</a></p>

        </div>
      </div>
    </>
  );
};

export default Cardsix;
