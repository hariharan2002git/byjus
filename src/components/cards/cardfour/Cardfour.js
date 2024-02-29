import React from 'react'
import '../cardfour/cardfour.css'
const Cardfour = () => {
  return (
    <>
      <div class="container  getbywidth">
        <div class="centeragetbycontent d-flex justify-content-center">
        <h1>Get the BYJU'S advantage</h1>
        </div>
        <div class="row mt-5 d-flex justify-content-between">
            <div class="col-3">
             <div class="getbycard d-flex flex-column gap-3">
                <img src="https://cdn1.byjus.com/wp-content/uploads/2022/04/concept-clarity.png" alt=""></img>
                <p class=" text-center">Conceptual clarity
                    through visualisation</p>
             </div>
            </div>
            <div class="col-3 ">
                <div class="getbycard d-flex flex-column gap-3">
                   <img src="https://cdn1.byjus.com/wp-content/uploads/2022/04/personalised-learning.png" alt=""></img>
                   <p class=" text-center">Personalised learning
                    programs</p>
                </div>
               </div>
               <div class="col-3">
                <div class="getbycard d-flex flex-column">
                   <img src="https://cdn1.byjus.com/wp-content/uploads/2022/04/unmatched-attention.png"  alt=""></img>
                   <p class=" text-center mt-3">Unmatched individual
                    attention</p>
                </div>
               </div>
            
        </div>
    </div>
    </>
  )
}

export default Cardfour
