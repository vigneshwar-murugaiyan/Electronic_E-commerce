import React, { useState } from 'react';
import './home.css';

import ImageSlider from '../components/ImageSlider';
import Carousel from '../components/CarouselWithText';
import Contact from '../components/ContactForm';

function Home() {
  
  const images = [
    'https://yt3.googleusercontent.com/ytc/AIdro_mkccqdUk--A6tjgqnhmpMI_AuMhVAtFXhIStXH=s900-c-k-c0x00ffffff-no-rj',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzuB_YmV4gzBD2nAXfikWs8TVRKnRRZGN5Sw&usqp=CAU',
    'https://upload.wikimedia.org/wikipedia/commons/7/74/Luminous_power_technologies_logo.jpg',
    'https://zeevector.com/wp-content/uploads/USHA-Logo-Vector.png',
    'https://ingcoegypt.com/images/favicon.png',
    'https://www.sameerappliances.com/cdn/shop/files/MicrosoftTeams-image_5.jpg?v=1696830932',
    'https://play-lh.googleusercontent.com/7d7wMv_XfstKbwCmIwSwhAQXkcWazpDzKZobTJDKzgbgtv4I-IVunRYQ8691tt15a2E',
    'https://1000logos.net/wp-content/uploads/2017/05/Phillips-Logo.png'
  ];


  return (
    <div className="App">
      <main>
        <div className="image-container">
          <img
            className="d-block w-100 "
            src="https://www.londonlashpro.com/cdn/shop/products/Glamcor_Reveal_2000x.gif?v=1708709847"
            alt="Welcome Image"
            style={{ height: "500px" }}
          />
          <div className="image-text">
            <h3>One stop solution to all your electrical and hardware needs</h3>
            <p style ={{ fontStyle: "italic"}}>"Electrify Your Life, Strengthen Your Structure"</p>
          </div>
        </div>

        <section className="about">
  <h2>About Us</h2>
  <p style ={{ fontStyle: "italic"}}>
    Sri Navaladi & Co Electricals and Hardwares Store has been a trusted destination for electrical and hardware needs for decades. 
    We offer top-quality products and excellent service, ensuring unmatched quality and reliability for all your requirements. 
    We provide quality products at the best market prices, ensuring affordability without compromising on excellence.
  </p>
</section>

  <h3>Popular Brands</h3>
  <ImageSlider images={images} /> 
  <Carousel/>
  <section className="services">
  <div className="row justify-content-between">
    <div className="col-md-3">
      <div className="card">
        <img src="https://img.freepik.com/premium-vector/product-quality-control-concept-people-check-product-quality-with-set-standard_675567-372.jpg?w=360" className="card-img-top"  alt="Service 1" />
        <div className="card-body">
          <h5 className="card-title">Quality & Assurance</h5>
          <p className="card-text">Ensuring top-notch quality to all our products.</p>
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="card">
        <img src="https://images.template.net/85155/free-fast-delivery-illustration-qv9x0.jpg" className="card-img-top"  alt="Service 2" />
        <div className="card-body">
          <h5 className="card-title">Express Delivery</h5>
          <p className="card-text">Swift and reliable shipping to your doorstep</p>
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Price_Tag_Flat_Icon_Vector.svg/1024px-Price_Tag_Flat_Icon_Vector.svg.png" className="card-img-top" alt="Service 3"  />
        <div className="card-body">
          <h5 className="card-title">Best Market Price</h5>
          <p className="card-text">Competitive rates without compromising quality.</p>
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="card">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/secure-payment-57-976718.png?f=webp" className="card-img-top" alt="Service 4" />
        <div className="card-body">
          <h5 className="card-title">Secure Payment</h5>
          <p className="card-text">Partnered with India's top payment providers.</p>
        </div>
      </div>
    </div>
  </div>
</section><br/><br/>
<Contact/>
      </main>
    </div>
  );
}

export default Home;
