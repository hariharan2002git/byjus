import React from 'react'
import Navbar from '../navbar/Navbar'
import Back from '../backgroundimghome/back'
import Content from '../cards/topcontent/Content'
import Cardone from '../cards/cardone/cardone'
import Cardtwo from '../cards/cardtwo/Cardtwo'
import Cardthree from '../cards/cardthree.js/Cardthree'
import Cardfour from '../cards/cardfour/Cardfour'
import Cardfive from '../cards/cardfive/Cardfive'
import Cardsix from '../cards/cardsix/Cardsix'
import Cardseven from '../cards/cardseven/Cardseven'
import Messagebox from '../msgbox/Messagebox'
const Header = () => {
  return (
    <>
    <Back/>

  <Content/>
  <Cardone/>
  <Cardtwo/>
  <Cardthree/>
  <Cardfour/>
  <Cardfive/>
 <Cardseven/>
 <Cardsix/>
    </>
  )
}

export default Header
