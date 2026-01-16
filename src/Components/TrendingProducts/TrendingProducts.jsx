import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './TrendingProducts.css';
import Whitearrow from '../../assets/white-arrow.png'
import { Link } from 'react-router-dom';
import { fetchTrendingProducts } from '../../api/productsApi';
import Loading from '../Loading/Loading';
import ProductCard from '../ProductCard/ProductCard';


function TrendingProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchTrendingProducts();
        setProducts(data);
        setError(null);
      } catch (err) {
        setError('Failed to load products. Please try again later.');
        console.error('Error loading trending products:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

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

  if (loading) {
    return (
      <section className="trending-section">
        <h2>Trending Products</h2>
        <Loading />
      </section>
    );
  }

  if (error) {
    return (
      <section className="trending-section">
        <h2>Trending Products</h2>
        <div className="error-message">
          <p>{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="trending-section" id="trending-section">
      <h2>Trending Products</h2>
      <Slider {...settings}>
        {products.map(product => (
          <div key={product.id}>
            <ProductCard product={product} />
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
