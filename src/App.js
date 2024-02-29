import logo from "./logo.svg";
import "./App.css";
import Messagebox from "./components/msgbox/Messagebox";
import Navbar from "./components/navbar/Navbar";
import Carouseltop from "./components/navbarcarousel/Carouseltop";
import Back from "./components/backgroundimghome/back";
import 'bootstrap/dist/css/bootstrap.min.css';
import Scholarship from "./pages/Scholarship/Scholarship";
import ByjuAnswerPannel from "./pages/ByjusAnswer/ByjuAnswerPannel";
import Jee from "./pages/studymaterial/Jee";
import Neet from "./pages/studymaterials/Neet/Neet";
import Cardone from "./components/cards/cardone/cardone";
import Cardtwo from "./components/cards/cardtwo/Cardtwo";
import Cardthree from "./components/cards/cardthree.js/Cardthree";
import Cardfour from "./components/cards/cardfour/Cardfour";
import Cardfive from "./components/cards/cardfive/Cardfive";
import Cardsix from "./components/cards/cardsix/Cardsix";
import Cardseven from "./components/cards/cardseven/Cardseven";
import Content from "./components/cards/topcontent/Content";
// import Cardcaro from "./components/cards/cardcaro/Cardcaro";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
function App() {
  return <>
   
<BrowserRouter>
<Messagebox/>

<Navbar/>

<Routes>
  <Route path="/" element={<Header/>}> </Route>
  <Route path="/scholarship" element={<Scholarship/>}></Route>
  <Route path="/answerpannel" element={<ByjuAnswerPannel/>}> </Route>
  <Route path="/neetinfo" element={<Neet/>}> </Route>
  <Route path="/cbse" element={<Neet/>}> </Route>
  <Route path="/neet" element={<Neet/>}> </Route>
  <Route path="/jee" element={<Neet/>}> </Route>
  <Route path="/classes" element={<Neet/>}> </Route>
  <Route path="/btc" element={<Neet/>}> </Route>
  <Route path="/filter" element={<Search/>}> </Route>

</Routes>
<Footer/>
</BrowserRouter>
   

    
  
   

  


  
    </>;
}


export default App;
