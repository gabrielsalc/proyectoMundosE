import { BrowserRouter , Routes, Route, Link} from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Services from './views/Services';
import Products from './views/Products';
import Contact from './views/Contact';
import Navbar from './views/Navbar';
import './App.css';
import 'bootstrap/scss/bootstrap.scss'

function App() {
  return (
      <header>
        <Navbar/>
        <Home/>
        <About/>
        <Products/>
        <Services/>
        <Contact/>
      </header>  
  );
}

export default App;
