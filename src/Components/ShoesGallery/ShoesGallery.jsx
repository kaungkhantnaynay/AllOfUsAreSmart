import React from 'react';
import { FaHeart, FaShoppingCart, FaEye, FaStar } from 'react-icons/fa';
import './ShoesGallery.css';
import AdidasSamba from "../../assets/Adidas-Samba.jpg";
import NB530 from "../../assets/NewBalance-530-new.jpg";
import NikeAir from "../../assets/Nike-AF1.jpeg";
import PumaSpeedcat from "../../assets/Puma-Speedcat.jpg";
import AllStarCanvas from "../../assets/Chuck-Taylor.jpg";
import Supernova from "../../assets/SuperNova.png"
import NikeV2k from "../../assets/Nike_V2K.jpg"
import PUMA_Shuffle from "../../assets/Puma-shuffle.jpg"

const ShoesGallery = () => {
  const shoes = [
    { id: 1, name: "Adidas Samba OG ", price: "฿3,800", image: AdidasSamba, rating: 4.5, reviews: "10.2k", soldOut: "80%" },
    { id: 2, name: "New Balance 530", price: "฿3,900", image: NB530, rating: 4.8, reviews: "15.3k", soldOut: "90%" },
    { id: 3, name: "Nike Air Force 1", price: "฿3,700", image: NikeAir, rating: 4.7, reviews: "12.1k", soldOut: "85%" },
    { id: 4, name: "PUMA Speedcat OG", price: "฿3,800", image: PumaSpeedcat, rating: 4.6, reviews: "9.8k", soldOut: "75%" },
    { id: 5, name: "All Star Canvas", price: "฿2,390", image: AllStarCanvas, rating: 4.9, reviews: "20.5k", soldOut: "95%" },
    { id: 6, name: "Adidas Supernova", price: "฿2,080", image: Supernova, rating: 4.6, reviews: "20.5k", soldOut: "90%" },
    { id: 7, name: "Nike V2K", price: "฿4,700", image: NikeV2k, rating: 4.6, reviews: "10.5k", soldOut: "80%" },
    { id: 8, name: "PUMA Shuffle", price: "฿1,375", image: PUMA_Shuffle, rating: 4.8, reviews: "30.5k", soldOut: "90%" }
    
  ];

  return (
    <div className="shoes-gallery">
      <h1>Our Shoes Collection</h1>
      <div className="gallery-container">
        {shoes.map(shoe => (
          <div className="shoe-card" key={shoe.id}>
            <div className="card-top">
              <img src={shoe.image} alt={shoe.name} />
              <FaHeart className="favorite-icon" />
            </div>
            <div className="card-bottom">
              <div className="rating">
                <FaStar className="star-icon" />
                <span>{shoe.rating}</span>
                <span>({shoe.reviews} Reviews)</span>
              </div>
              <h4>{shoe.name}</h4>
              <div className="price-cart">
                <p>{shoe.price}</p>
                <span>Sold Out {shoe.soldOut}</span>
                <FaShoppingCart className="cart-icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoesGallery;
