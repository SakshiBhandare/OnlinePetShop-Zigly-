import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import food from '../../Assets/food.jpg';
import '../Product/productimageslider.css';

const ProductImageSlider = () => {

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // };
    const images = [
        food,
        "https://www.zigly.com/media/catalog/product/cache/c64dae22d3d7308ba9e0f4ad3d9bc2b6/f/a/farmina_n_d_grain_free_pumpkin_lamb_blueberry_mini_breed_puppy_dry_food-800_g_1.jpg"
        // Add more image URLs here
      ];


    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentImage, setCurrentImage] = useState(images[0]);

    useEffect(() => {
        setCurrentImage(images[currentIndex])
    }, [currentIndex])
    
  const nextSlide = () => {
    alert(currentIndex)
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

    return (
        <>
            <div className="carousel">
      <button className="arrow prev" onClick={prevSlide}>
        Prev
      </button>
      <div className="slide">
        {/* {images.map((image, index) => ( */}
          <img
            // key={index}
            src={currentImage}
            // alt={`Slide ${index}`}
            // className={index === currentIndex ? 'active' : ''}
          />
        {/* ))} */}
      </div>
      <button className="arrow next" onClick={nextSlide}>
        Next
      </button>
    </div>



            {/* <div className='w-[100%]'>
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div> */}
        </>
    );
};

export default ProductImageSlider;