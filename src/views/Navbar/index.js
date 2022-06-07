import Logo from './top-logo.png';

function Navbar() {
  return (
    <div className="container-fluid" id="navbardiv">
    <nav id="navbar" class="navbar fixed-top navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a id="logo" class="navbar-brand" href="#home">
          <img src={Logo} alt="logo 25Watts" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div id="navletras" class="navbar-nav ms-auto">
            <a id="anavbar" className="nav-link" href="#home">Home</a>
            <a id="anavbar" className="nav-link" href="#aboutlink">About</a>
            <a id="anavbar" className="nav-link" href="#productslink">Products</a>
            <a id="anavbar" className="nav-link" href="#serviceslink">Services</a>
            <a id="anavbar" className="nav-link" href="#contactlink">Contact</a>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
