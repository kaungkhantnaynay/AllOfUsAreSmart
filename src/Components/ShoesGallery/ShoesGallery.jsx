import React, { useState, useEffect } from 'react';
import './ShoesGallery.css';
import { fetchAllProducts } from '../../api/productsApi';
import Loading from '../Loading/Loading';
import ProductCard from '../ProductCard/ProductCard';

const ShoesGallery = () => {
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadShoes = async () => {
      try {
        setLoading(true);
        const data = await fetchAllProducts();
        setShoes(data);
        setError(null);
      } catch (err) {
        setError('Failed to load products. Please try again later.');
        console.error('Error loading shoes:', err);
      } finally {
        setLoading(false);
      }
    };

    loadShoes();
  }, []);

  if (loading) {
    return (
      <div className="shoes-gallery">
        <h1>Our Shoes Collection</h1>
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="shoes-gallery">
        <h1>Our Shoes Collection</h1>
        <div className="error-message">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="shoes-gallery">
      <h1>Our Shoes Collection</h1>
      <div className="gallery-container">
        {shoes.map(shoe => (
          <ProductCard product={shoe} key={shoe.id} />
        ))}
      </div>
    </div>
  );
};

export default ShoesGallery;
