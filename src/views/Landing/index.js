import Navbar from "../Navbar";

function Landing() {
  return (
    <section class="principal">
    <div>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <h2>Sed ut perspiciatis unde omnis iste natus</h2>

            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>


            <button type="button" class="btn btn-primary btn-lg button-landing">
              Read more
            </button>
          </div>
        <div class="carousel-item">
          <h1>Carrusel 2</h1>
        </div>
        <div class="carousel-item">
          <h1> Carrusel 3</h1>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
      
    </div>
    </section>
  );
}

export default Landing;
