import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselWithText.css'; // Import your CSS file for styling

const CarouselWithText = () => {
  return (
    <div className="carousel-with-text-container">
      <div className="carousel-content">
        <Carousel interval={1000} pause="hover" className="carousel">
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="https://www.rakenapp.com/img/containers/assets/hammer-tools.jpg/2514b2e43f7898a6c4bb4205e5087226.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Tools and Equipments</h3>
              <p>Get a new collection from our top brands</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="https://www.therange.co.uk/media/8/4/1654595065_12_1080.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Quality Electricals</h3>
              <p>Illuminate your place with our products.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="https://img.freepik.com/free-photo/male-electrician-works-switchboard-with-electrical-connecting-cable_169016-16355.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703116800&semt=ais"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Safe Wirings</h3>
              <p>Ensure safety with our range of reliable wiring.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="text-content">
  <h2>Our Story</h2>
  <p>
    At Sri Navaladi & Co, we're more than just a store – we're a symbol of reliability and trust. Our journey began with a simple vision: to provide top-quality electrical and hardware solutions to every home and business in our area.we offer a wide range of products to cater to various needs. From electrical components like switches, wires, and sockets to hardware essentials like tools, fasteners, and plumbing supplies, we have it all. 
  </p>

</div>






    </div>
  );
};

export default CarouselWithText;
