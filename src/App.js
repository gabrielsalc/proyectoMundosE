import Landing from "./views/Landing";
import Navbar from "./views/Navbar";
import About from "./views/About";
import Services from "./views/Services";
import Contact from "./views/Contact";
import Products from "./views/Products";
import Footer from "./views/Footer";
import "./index.scss";
import "./styles/app.css";
import "./styles/app.scss";
import "./index.scss";


function App() {
  return (
    <div class="container">
      <div className="row section-landing">
        <div className="row section-navbar section-navbar">
          <Navbar/>
        </div>
        <div className="row landing-content" id="landing">
          <div className="col-1">
          </div>
          <div className="col-8">
            <Landing/>
          </div>
          <div className="col-3">
          </div>
        </div>
      </div>
      <div id="aboutlink"></div>
      <About/>
      <div id="productslink"></div>
      <Products/>
      <div id="serviceslink"></div>
      <Services/>
      <div id="contactlink"></div>
      <Contact/>
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
