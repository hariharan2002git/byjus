import React from 'react'
import '../cardthree.js/cardthree.css'
const Cardthree = () => {
  return (
    <>
        <div class="main container mt-2  justify-content-center">
        <div class="bannerOne">
            <button class="cardBtnone ">JEE/NEET</button>

            </div>
        <div class="row justify-content-between ">
            

            <div class="col-5 d-flex flex-column bannerLinepos text-center">
                <div class="left">
                    <img src="https://cdn1.byjus.com/wp-content/uploads/2022/04/jeeTeaching.png" alt="" height="200px" width="400px"></img>
                </div>
                <div class="right">
                    <p>Comprehensive learning program for JEE preparation</p>
                    <button class="cardBtns">Explore JEE</button>
                </div>
                <div class="col-1 horizontalline">   
                  
                </div>
            </div>

         
            
            <div class="col-5 d-flex flex-column text-center">
                <div class="left">
                    <img src="https://cdn1.byjus.com/wp-content/uploads/2022/04/neet_teaching_web.png" alt=""
                        height="200px" width="400px"></img>
                </div>
                
                <div class="right">                   
                    <p>Comprehensive learning program for NEET aspirants</p>
                    <button class="cardBtns">Explore NEET</button>
                </div>
            </div>
           
        </div>
    </div>

    </>
  )
}

export default Cardthree
