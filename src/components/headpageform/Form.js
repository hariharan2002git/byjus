import React from "react";
import "../headpageform/form.css";
const Form = () => {
  return (
    <>
    <section className="secform">
      <div className="mainform">
        <div className="content marginbottom14">
          <h2>Book your Free Session</h2>
          <p>Learn from India's best teachers</p>
          <h3>Select the Session Mode</h3>
        </div>
        <div className="form-btns marginbottom14">
          <button>Online</button>
          <button>Offline</button>
        </div>
        <h3 className="formtext">Enter Your Details</h3>
        <input
          type="text"
          placeholder="ENTER NAME OF YOUR CHILD"
          className="input marginbottom10"
        ></input>
        <input
          type="text"
          placeholder="ENTER YOUR MOBILE NUMBER"
          className="input marginbottom10"
        ></input>
        <input
          type="text"
          placeholder="EMAIL ADDRESS"
          className="input marginbottom10"
        ></input>
        <div className="inputsendotp">
          <input
            type="text"
            placeholder="Enter The State"
            className="input state marginbottom10"
          ></input>
          <button>log in</button>
        </div>

        <div className="submitformbtn">
          <button>Continue to schedule</button>
        </div>
      </div>
      </section>
    </>
  );
};

export default Form;
