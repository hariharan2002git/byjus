import React from 'react'
import Carouseltop from '../navbarcarousel/Carouseltop';
import '../backgroundimghome/back.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from '../headpageform/Form';
const Back = () => {
  return (
    <>
 <div className="backmain">
      <Carouseltop/>
      <div className="backgroundimage1">
        <img src="https://cdn1.byjus.com/wp-content/uploads/2023/10/Homepage_1stFold_Banner.webp" alt="" className='backimg' />
        <div className="formgroup">
        <Form/>
        </div>
      </div>
 </div>

    </>
  )
}

export default Back
