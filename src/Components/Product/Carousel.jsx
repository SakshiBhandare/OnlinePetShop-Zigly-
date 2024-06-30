import React from 'react';
import food from '../../Assets/food.jpg';
import ProductImageSlider from './ProductImageSlider';

const Carousel = () => {

    const images = [
        'food.jpg',
        'food.jpg',
        'food.jpg',
        // Add more image URLs here
      ];
    return (
        <>
          <div className="app">
      <h1>Image Carousel Example</h1>
      <ProductImageSlider images={food} />
    </div>  
        </>
    );
};

export default Carousel;