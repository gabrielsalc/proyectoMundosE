import Landing from "./views/Landing";
import Navbar from "./views/Navbar";
import About from "./views/About";
import Services from "./views/Services";
import Contact from "./views/Contact";
import Products from "./views/Products";
import Footer from "./views/Footer";
import bootstrap from 'bootstrap';
//import "./styles/app.css";
import "./index.scss";



function App() {
  return (
  <div>
  <div id="arriba">
 <Navbar/>
  </div>
  <div id="home">
  <Landing/>
  </div>
  <div id="aboutlink"></div>
  <About/>
  <div id="productslink"></div>
  <Products/>
  <div id="serviceslink"></div>
  <Services/>
  <div id="contactlink"></div>
  <Contact/>
  <div id="footerlink"></div>
  <Footer/>
    </div>
  );
}

export default App;

// <Navbar></Navbar>
// <Landing></Landing>
// <About></About>
// <Products></Products>
// <Services></Services>
// <Contact></Contact>
