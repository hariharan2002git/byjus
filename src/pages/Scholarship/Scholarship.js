import React from "react";
import "../Scholarship/scholar.css";
import { CiCalendar } from "react-icons/ci";
import { FaClock } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdArrowCircleRight } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import Accordion from "react-bootstrap/Accordion";
const Scholarship = () => {
  return (
    <>
      <Scholarshipnav />
      <Scholarcontent />
      <Contenttwo />
      <Bstcontent />
      <Register />
      <Accordionbts />
    </>
  );
};

const Scholarshipnav = () => {
  return (
    <>
      <div className="bc">
        <div className="scholarnavbar">
          <img
            src="https://prod-at-elsa.byjusweb.com/_next/static/media/bstLogo.c104ee88.webp"
            alt=""
          />
          <button className="scholarnavbtn">Login</button>
        </div>
        <div className="scholarshipnav">
          <div className="scholarnavcontent ">
            <h3 className="mbottom color">India’s largest scholarship test</h3>
            <h2 className="headtextsize color">Get upto 100%</h2>
            <h2 className="headtextsize color mbottom">Scholarship</h2>
            <button className="navscholarbtn mbottom">
              For Classes 4th-10th
            </button>
            <p className="color size17">
              <span className="iconspan">
                <CiCalendar className="iconscholar" />
              </span>
              Last date to register 3 Mar - 6:00 AM
            </p>
          </div>
          <img
            src="https://prod-at-elsa.byjusweb.com/_next/static/media/studentLogo.403b89f7.webp"
            alt=""
            width={350}
          />

          <div className="scholarform">
            <h2 className="mbottom headscholar">Register now for FREE</h2>
            <div className="labelnst mbottom">
              <label htmlFor="lab" className="navlabel ">
                {" "}
                <span className="spanlabel">+91</span>{" "}
                <input
                  type="text"
                  id="lab"
                  placeholder="Enter The Mobile Number"
                ></input>
              </label>
            </div>
            <button className="scholarregbtn mbottom">Register now</button>

            <h4>
              Already Registered? <span className="colorspan">Log in</span>{" "}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

const Scholarcontent = () => {
  return (
    <>
      <div className="scholartext textalign">
        <h2 className="martext">Benefits you will gain from BST</h2>
        <div className="scholarcard">
          <div className="scholarcard1">
            <span className="imgspan">
              <img
                src="https://prod-at-elsa.byjusweb.com/_next/static/media/scholarship.7aef2b09.svg"
                alt=""
              />
            </span>
            <h3 className="cardtext">BYJU’S Scholarship programme</h3>
            <p className="cardtext2">
              Get upto 100% scholarship based on your performance in BST.
            </p>
          </div>
          <div className="scholarcard2">
            <span className="imgspan">
              <img
                src="https://prod-at-elsa.byjusweb.com/_next/static/media/scorecard.5882dc01.svg"
                alt=""
              />
            </span>
            <h3 className="cardtext">Scorecard</h3>
            <p className="cardtext2">
              Get your all-India percentile, state percentile, city percentile
              and percentage score.
            </p>
          </div>
          <div className="scholarcard3">
            <span className="imgspan">
              <img
                src="https://prod-at-elsa.byjusweb.com/_next/static/media/skillAnalysis.588175ec.svg"
                alt=""
              />
            </span>
            <h3 className="cardtext">Academic Skill Analysis</h3>
            <p className="cardtext2">
              Get in-depth subject wise analysis and analysis of aptitude and
              reasoning skills.
            </p>
          </div>
          <div className="scholarcard4">
            <span className="imgspan">
              <img
                src="https://prod-at-elsa.byjusweb.com/_next/static/media/counselling.807620a8.svg"
                alt=""
              />
            </span>
            <h3 className="cardtext">Personalised Counselling</h3>
            <p className="cardtext2">
              After the test, you will also from experts on how to work and
              improve your focus areas.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const Contenttwo = () => {
  return (
    <>
      <div className="txtnav">
        <h2>Test Pattern</h2>
      </div>
      <div className="sectionscholars">
        <div className="advcards">
          <h2>Classes 4, 5 & 6</h2>
          <div className="cardtwo">
            <p>
              <FaClock style={{ color: "#8c69ff" }} />
              10:00am - 10:45am
            </p>
            <p>
              <FaRegCalendarAlt style={{ color: "#8c69ff" }} />
              03 March 24
            </p>
            <div className="subcontent">
              <h3>syllabus</h3>

              <h4>
                Mathematics | Science Aptitude <br />| Science Social Science
              </h4>
            </div>
            <button className="btncard">register for free</button>
          </div>
        </div>
        <div className="advcards">
          <div className="cardtwo">
            <h2>Classes 7 & 8</h2>
            <p>
              <FaClock style={{ color: "#8c69ff" }} />
              12:30pm - 1:30pm
            </p>
            <p>
              <FaRegCalendarAlt style={{ color: "#8c69ff" }} />
              03 March 24
            </p>
            <div className="subcontent">
              <h3>syllabus</h3>

              <h4>
                Mathematics | Science Social Science <br />| Aptitude
              </h4>
            </div>
            <button className="btncard">register for free</button>
          </div>
        </div>
        <div className="advcards">
          <div className="cardtwo">
            <h2>Classes 9 & 10</h2>
            <p>
              <FaClock style={{ color: "#8c69ff" }} />
              03:00pm - 4:15pm
            </p>
            <p>
              <FaRegCalendarAlt style={{ color: "#8c69ff" }} />
              03 March 24
            </p>
            <div className="subcontent">
              <h3>syllabus</h3>
              <h4>
                Mathematics | Science Social Science <br /> | Aptitude
              </h4>
            </div>
            <button className="btncard">register for free</button>
          </div>
        </div>
      </div>
    </>
  );
};

const Bstcontent = () => {
  return (
    <>
      <div className="mainBts">
        <p>Why Should You Take BST?</p>
        <br />
        <p>
          Success = Hard Work x{" "}
          <span className="spantxtbts">Learning Skills</span>
        </p>

        <div className="graycontent">
          <div className="contentbts">
            <p>
              BYJU'S Scholarship Test (BST) will empower you with an in-depth
              analysis of your academic proficiency
            </p>
          </div>
          <div className="line"></div>
          <div className="contentbts">
            <p>
              BYJU'S Scholarship Test (BST) will empower you with an in-depth
              analysis of your academic proficiency
            </p>
          </div>
          <div className="line"></div>

          <div className="contentbts">
            <p>
              BYJU'S Scholarship Test (BST) will empower you with an in-depth
              analysis of your academic proficiency
            </p>
          </div>
        </div>
      </div>
      <div className="btstregister">
        <h1 className="textalign btscontent">How to Register</h1>
        <div className="textimgbts">
          <span className="btsimgicon">
            <img
              src="https://prod-at-elsa.byjusweb.com/_next/static/media/mobilePhone.1b385f08.svg"
              alt=""
            />
          </span>

          <p>Verify your mobile number with OTP</p>
          <p className="iconsbts">
            .........
            <MdArrowCircleRight className="iconfor" />
            ........
          </p>

          <span className="btsimgicon">
            <img
              src="https://prod-at-elsa.byjusweb.com/_next/static/media/details.4f8b086f.svg"
              alt=""
            />
          </span>
          <p>Verify your mobile number with OTP</p>
          <p className="iconsbts">
            .........
            <MdArrowCircleRight className="iconfor" />
            ........
          </p>

          <span className="btsimgicon">
            <img
              src="https://prod-at-elsa.byjusweb.com/_next/static/media/success.b9340a34.svg"
              alt=""
            />
          </span>
          <p>Verify your mobile number with OTP</p>
        </div>
        <div className="btnbtslast">
          <button className="btsbtnend">Register for free</button>
        </div>
      </div>
    </>
  );
};

const Register = () => {
  return (
    <>
      <div className="sharebts">
        <h1>Share & Invite</h1>
        <h2> Invite your friends to write BST</h2>
        <div className="shareicon">
          <span className="iconshare">
            <FaWhatsapp />
          </span>
          <span className="iconshare">
            <FaTwitter />
          </span>
          <span className="iconshare">
            <FaFacebook />
          </span>
          <span className="iconshare">
            <FaTelegram />
          </span>
          <span className="iconshare">
            <FaCommentDots />
          </span>
        </div>
      </div>
    </>
  );
};

const Accordionbts = () => {
  return (
    <><div className="wrp">
      <div className="acc">
        <h1 className="gapdown">Frequently Asked Questions</h1>
        <h4 className="gapdown">Clear all your doubts</h4>
        <Accordion className="textalignstart">
          <Accordion.Item eventKey="0" className="expand">
            <Accordion.Header>Eligibility</Accordion.Header>
            <Accordion.Body>
              <p>
                Any student studying in classes 4-10 in any board (CBSE, ICSE,
                State Boards, NIOS, etc.) are eligible to appear in BST.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="expand">
            <Accordion.Header>Benefits to students</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Analyse their strengths and key areas of improvement</li>
                <li>Assess their understanding of basic concepts.</li>
                <li>
                  Benchmark themselves against other students at the state and
                  all-India level
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="expand">
            <Accordion.Header>Registration Fee</Accordion.Header>
            <Accordion.Body>
        <p>BST is free and open to all eligible students.</p>
      
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="expand">
            <Accordion.Header>How To Apply?</Accordion.Header>
            <Accordion.Body>
            Apply online at <a href="#">website</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="expand">
            <Accordion.Header>Marking scheme</Accordion.Header>
            <Accordion.Body>
              <p>Every correct answer gets +1 mark.
There is no penalty for incorrect answers.</p>
            
            </Accordion.Body>
          </Accordion.Item >
          <Accordion.Item eventKey="5" className="expand">
            <Accordion.Header>Rewards</Accordion.Header>
            <Accordion.Body >
            <p>Get up to a 100% scholarship on BYJU'S programmes based on the performance in BST.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6" className="expand">
            <Accordion.Header>How to take BST?</Accordion.Header>
            <Accordion.Body>
            BST has to be taken online <br />
Timings would be:<br />
Class 4-5-6 : 10 AM - 10:45 AM<br />
Class 7-8 : 12:30 PM - 1:30 PM<br />
Class 9-10 : 3 PM - 4:15 PM <br />
To login, students must use their mobile number and the system generated password.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="7" className="expand">
            <Accordion.Header>Can I use a calculator?</Accordion.Header>
            <Accordion.Body>
<p>Yes, you can. But questions in the test will not be so simple to solve</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        ;
      </div>
      </div>
    </>
  );
};




const Footer =()=>{
  return(
    <>
    
    </>
  )
}
export default Scholarship;
