import React from "react";
import "../ByjusAnswer/byjuanswer.css";
import Navbar from "../../components/navbar/Navbar";
import { CiSearch } from "react-icons/ci";
import { PiNotepadFill } from "react-icons/pi";
import { FaFileCircleQuestion } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { FaBookBookmark } from "react-icons/fa6";
const ByjuAnswerPannel = () => {
  return (
    <>
       
      <Byjuanspannel />
      <Searchans />
      <Bannerans/>
      <Cardthreeans/>
    </>
  );
};

const Byjuanspannel = () => {
  return (
    <>
      <div className="mainbyjusbanner">
        <div className="ansbanner">
          <img
            src="https://search-static.byjusweb.com/assets/HP_TB_W.webp?imwidth=1920"
            alt=""
            className="imgcontainerans"
          />
        </div>
      </div>
    </>
  );
};

const Searchans = () => {
  return (
    <>
      <div className="anssec textalign">
        <h2>Ask a question. Get a verified answer.</h2>
        <div className="inputanstwo">
            <label className="borderapply" >
            <input type="text" className="inputanspanel"/>
           <span className="iconans"><CiSearch className="iconanswerssec"/></span>
            </label>
        <span className="iconbyjuanssec"><PiNotepadFill /></span>
          
        </div>

      </div>
    </>
  );
};


const Bannerans=()=>{
    return(
        <>
        <div className="sectionansthree textalign">
            <div className="ansonecard">
            <FaFileCircleQuestion  className="spaceicon"/>
            <h3>35 Lakh Questions</h3>
            <p>View answers to all your questions without any hassle</p>
            </div>
            <div className="ansonecard">
            <MdOutlineSecurity className="spaceicon" />
            <h3>Verified Answers</h3>
            <p>Get expert verified answers so you don’t waste time</p>
            </div>

            <div className="ansonecard">
            <FaBookBookmark className="spaceicon" />
            <h3>500+ Textbook Solutions</h3>
            <p>Browse questions from all popular textbooks of your grade</p>
            </div>
        </div>
        </>
    )
}


const Cardthreeans=()=>{
    return(
        <>
         <div className="cardthreeimg">
    <div className="imgthreeans">
        <img src="https://search-static.byjusweb.com/assets/homepage_icons/textbook.svg?imwidth=256" alt="" className="imgansthrees"/>
        <p>Textbooks</p>
    </div>
    <div className="imgthreeans">
        <img src="https://search-static.byjusweb.com/assets/homepage_icons/question_paper.svg?imwidth=256" alt="" className="imgansthrees"/>
        <p>Questionpaper</p>
    </div>
    <div className="imgthreeans">
        <img src="https://search-static.byjusweb.com/assets/mathsolver.png?imwidth=256" alt="" className="imgansthrees"/>
        <p>Math solver</p>
    </div>
    
         </div>
           <div className="cardthreeanother">
         <img src="https://search-static.byjusweb.com/assets/app-download-desktop.png?imwidth=828 1x, https://search-static.byjusweb.com/assets/app-download-desktop.png?imwidth=1920 2x" alt="" />

           </div>
        </>
    )
}

export default ByjuAnswerPannel;
