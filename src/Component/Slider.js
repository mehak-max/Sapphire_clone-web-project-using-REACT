import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
const data = [
   "Images/slider1.webp",
   "Images/slider2.webp",
   "Images/slider3.webp",
   "Images/slider4.webp"
];
const items = data.map((x, i) => (
    <img key={i} src={x} alt={`Slide ${i + 1}`} className='img-fluid' />  // Ensure 'img-fluid' class is applied if used
));
const Slider = () => {
  return (
    <div className='slider-container mt-1 pt-1'>
      <AliceCarousel
        items={items}
        autoPlay
        infinite
        disableDotsControls
        disableButtonsControls
        autoPlayInterval={2000} // Adjusted to 3000ms for better user experience
      />
    </div>
  );
}
export default Slider;
