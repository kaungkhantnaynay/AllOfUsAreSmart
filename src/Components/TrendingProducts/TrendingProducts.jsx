import React from 'react';
import Slider from 'react-slick';
import './TrendingProducts.css';
import { FaHeart, FaStar, FaShoppingCart } from 'react-icons/fa';
import AdidasSamba from "../../assets/Adidas-Samba.jpg";
import NB530 from "../../assets/NewBalance-530.jpg";
import NikeAir from "../../assets/Nike-AF1.jpeg";
import PumaSpeedcat from "../../assets/Puma-Speedcat.jpg";
import AllStarCanvas from "../../assets/Chuck-Taylor.jpg";
import Whitearrow from '../../assets/white-arrow.png'
import { Link } from 'react-router-dom';


const products = [
  { id: 1, name: "Adidas Samba OG ", price: "฿3,800", image: AdidasSamba, rating: 4.5, reviews: "10.2k", soldOut: "80%" },
  { id: 2, name: "New Balance 530", price: "฿3,900", image: NB530, rating: 4.8, reviews: "15.3k", soldOut: "90%" },
  { id: 3, name: "Nike Air Force 1", price: "฿3,700", image: NikeAir, rating: 4.7, reviews: "12.1k", soldOut: "85%" },
  { id: 4, name: "PUMA Speedcat OG", price: "฿3,800", image: PumaSpeedcat, rating: 4.6, reviews: "9.8k", soldOut: "75%" },
  { id: 5, name: "All Star Canvas", price: "฿2,390", image: AllStarCanvas, rating: 4.9, reviews: "20.5k", soldOut: "95%" }
];


function TrendingProducts() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="trending-section">
      <h2>Trending Products</h2>
      <Slider {...settings}>
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <div className="card-top">
              <img src={product.image} alt={product.name} />
              <FaHeart className="favorite-icon" />
            </div>
            <div className="card-bottom">
              <div className="rating">
                <FaStar className="star-icon" />
                <span>{product.rating}</span>
                <span>({product.reviews} Reviews)</span>
              </div>
              <h4>{product.name}</h4>
              <div className="price-cart">
                <p>{product.price}</p>
                <span>Sold Out {product.soldOut}</span>
                <FaShoppingCart className="cart-icon" />
              </div>
              
            </div>
            
          </div>
          
        ))}
      </Slider>
      <Link to="/ShoesGallery">
      <div className='see-more-wrapper'>
      <button className="btn dark-btn">Shop now<img src={Whitearrow} alt="" /></button>
      </div>
      </Link>
    </section>
    
  );
}


export default TrendingProducts;
