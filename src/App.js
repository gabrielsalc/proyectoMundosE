import Landing from "./views/Landing";
import Navbar from "./views/Navbar";
import About from "./views/About";
import Services from "./views/Services";
import Contact from "./views/Contact";
import Products from "./views/Products";
//import "./App.css";
import "./index.scss";
import "./styles/app.css";
import "./styles/app.scss";


function App() {
  return (
    <div className="container">
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
      <About/>
      <Products/>
      <Services/>
      <Contact/>
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
