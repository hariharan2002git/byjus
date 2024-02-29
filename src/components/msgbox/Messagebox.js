import React, { useState } from "react";
import "../msgbox/messagebox.css"
import { IoIosCloseCircle } from "react-icons/io";
const Messagebox = () => {
  const[show,setShow]=useState(true)

  function handleshow(){
    setShow(!show)
   
  }
  return (
    <>
    {show ? (  <div className="msgbox">
        <h2 className="msgtext">
          JEE 2024 Main: Session 2 crash course at Rs 4,500
        </h2>
        <button className="msgbtn">Check details</button>
        <p className="msgicon" onClick={()=>handleshow()}><IoIosCloseCircle /></p>
      </div>):null}
    </>
  );
};

export default Messagebox;
