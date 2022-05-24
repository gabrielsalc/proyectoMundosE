function Navbar(){
    return(
        <header class="header">
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">25Watts</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link" href="#home">Home</a>
                            <a className="nav-link" href="#about">About</a>
                            <a className="nav-link" href="#products">Products</a>
                            <a className="nav-link" href="#services">Services</a>
                            <a className="nav-link" href="#contact">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;