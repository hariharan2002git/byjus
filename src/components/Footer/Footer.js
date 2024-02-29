import React from "react";
import "../Footer/footer.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="gridfooter">
          <ul className="footercon">
            <p className="footertext">COURSES</p>
            <li>CBSE</li>
            <li>ICSE</li>
            <li>CAT</li>
            <li>IAS</li>
            <li>NEET</li>
            <li>JEE MAIN</li>
            <li>NCERT</li>
            <li>JEE Advanced</li>
            <li>UPSC Prelims 2022 Question Paper</li>
            <li>UPSC Prelims 2022 Answer Key</li>
          </ul>
          <ul className="footercon">
            <p className="footertext">EXAMS</p>
            <li>CAT Exam</li>
            <li>CAT 2023</li>
            <li>GATE Exam</li>
            <li>GATE 2024</li>
            <li>UPSC Syllabus</li>
            <li>Education News</li>
            <br />
            <p className="footertext">CLASSES</p>
            <li>Kids Learning</li>
            <li>Class 1st - 3rd</li>
            <li>Class 4th - 5th</li>
            <li>Class 6th - 10th</li>
            <li>Class 11th - 12th</li>
            <li>BYJU'S Tuition Centre</li>
          </ul>

          <ul className="footercon">
            <p className="footertext">EXAM PREPARATION</p>
            <li>Free CAT Prep</li>
            <li>Free IAS Prep</li>
            <li>Maths</li>
            <li>Physics</li>
            <li>Chemistry</li>
            <li>Biology</li>
            <li>JEE 2024</li>
            <li>JEE Advanced 2023 Question Paper with Answers</li>
            <li>NEET 2023 Question Paper</li>

            <br />
            <p className="footertext">RESOURCES</p>
            <li>BYJU'S Answer</li>
            <li>Home Tuition</li>
            <li>All Products</li>
            <li>Calculators</li>
            <li>Formulas</li>
          </ul>

          <ul className="footercon">
            <p className="footertext">COMPANY</p>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Contact our Financial Partners</li>
            <li>Investors</li>
            <li>Careers</li>
            <li>BYJU'S in Media</li>
            <li>BYJU'S APP</li>
            <li>Students Stories - The Learning Tree</li>
            <li>Support</li>
            <li>Faces of BYJU'S – Life at BYJU'S</li>
            <li>Blog</li>
            <li>BYJU'S Give</li>
            <br />
            <p className="footertext">FOLLOW US</p>
            <div className="icongri">
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaLinkedin />
              </li>
            </div>
          </ul>
          <ul className="footercon">
            <p className="footertext">FREE TEXTBOOK SOLUTIONS</p>
            <li>NCERT Solutions </li>
            <li>NCERT Exemplar </li>
            <li>NCERT Solutions for Class 6 </li>
            <li>NCERT Solutions for Class 7 </li>
            <li>NCERT Solutions for Class 8 </li>
            <li>NCERT Solutions for Class 9 </li>
            <li>NCERT Solutions for Class 10 </li>
            <li>NCERT Solutions for Class 11 </li>
            <li>NCERT Solutions for Class 11 English </li>
            <li>NCERT Solutions for Class 12 English </li>
            <li>NCERT Solutions for Class 12 </li>
            <li>RD Sharma Solutions </li>
            <li>RD Sharma Class 10 Solutions </li>
            <li>ICSE Selina Solutions </li>
          </ul>
          <ul className="footercon">
            <p className="footertext">STATE BOARDS</p>

            <li>Maharashtrali </li>
            <li>Gujaratli </li>
            <li>Tamil Naduli </li>
            <li>Karnatakali </li>
            <li>Keralali </li>
            <li>Andhra Pradeshli </li>
            <li>Telanganali </li>
            <li>Uttar Pradeshli </li>
            <li>Biharli </li>
            <li>Rajasthanli </li>
            <li>Madhya Pradeshli </li>
            <li>West Bengalli </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
