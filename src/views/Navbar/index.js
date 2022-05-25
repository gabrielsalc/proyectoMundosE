function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="./top-logo.png" alt="logo 25Watts" />
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
          <div class="navbar-nav ms-auto">
            <a className="nav-link" href="/">
              Home
            </a>
            <a className="nav-link" href="#aboutlink">About</a>
            <a className="nav-link" href="#productslink">Products</a>
            <a className="nav-link" href="#serviceslink">Services</a>
            <a className="nav-link" href="#contactlink">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
