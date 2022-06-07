import imagen from '../../images/section3-image.png';
import bootstrap from 'bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import Left from './left.png';
import Right from './right.png';


function Products() {
  return (
    <div className="container-fluid" id="background">
      <div id="whitediv">
      </div>
      <div id="greydiv">

      </div>
      <div id="orangediv">
      <Carousel indicators={false}>
  <Carousel.Item>
  <p id="p1products">Sed ut perspiciatis</p>
        <h2 id="h2products">Nemo Enim</h2>
        <p id="pproducts">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <p id="p1products">Sed ut perspiciatis</p>
        <h2 id="h2products">Nemo Enim</h2>
        <p id="pproducts">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <p id="p1products">Sed ut perspiciatis</p>
        <h2 id="h2products">Nemo Enim</h2>
        <p id="pproducts">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>

        
    </div>
    </div>
  );
}

export default Products;
