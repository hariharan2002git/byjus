import React from 'react'
import '../cardone/cardone.css'
const Cardone = () => {
  return (
    <div>
      <div class="main container mt-5 justify-content-center">
        <div class="bannerOne">
            <button class="cardBtnone ">CLASSES  <br />4 TO 10</button>

            </div>
        <div class="row justify-content-between ">
            

            <div class="col-5 d-flex bannerLinepos">
                <div class="left">
                    <img src="https://cdn1.byjus.com/wp-content/uploads/2022/04/btla.png " alt=""></img>
                </div>
                <div class="right">
                    <img src="https://cdn1.byjus.com/byjusweb/img/home/svg/byjus_learningapp_logo.svg" alt=""></img> <br />
                    <p>Personalised learning app
                        to learn anytime, anywhere</p>
                </div>
                <div class="col-1 horizontalline">   
                  
                </div>
            </div>

         
            
            <div class="col-5 d-flex">
                <div class="left">
                    <img src="https://cdn1.byjus.com/wp-content/uploads/2022/04/byjus-classes-tutor-img.png" alt=""
                        height="200px" width="200px"></img>
                </div>
                
                <div class="right ">

                    <img src="https://cdn1.byjus.com/byjusweb/img/home/image/byjus_classes_2_line_logo.png" alt=""
                        height="100px" width="210px"></img> <br /> <br />
                    <p>Personalised online tutoring
                        program</p>
                </div>
            </div>
            <div class="bannerOne">
            <button class="cardBtn ">BOOK A FREE CLASS</button>

            </div>
        </div>
    </div>
    </div>
  )
}

export default Cardone
