
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'; // Import Alice Carousel CSS
import { category } from '../Data/Data';

const Category = () => {
  // Create carousel items from the data
  const items = category.map((item, i) => (
    <div key={i} className='card  ' style={{ border: 'none', borderRadius: '0px' }}>
      <img
        src={item.image}
        alt={item.name}
        className='card-img-top mx-4 '
        style={{
          width: '100%',
          height: 'auto', // Maintain aspect ratio
          
        }}
      />
      <div className='card-body p-3 text-center'>
        <h6 className='card-title'>{item.title}</h6>
      </div>
    </div>
  ));
  return (
    <div className='container-fluid mt-5 pt-5 '>
      <h3 className='text-center' style={{ fontFamily: 'monospace', fontSize: '30px' }}>
        SHOP BY CATEGORY
      </h3>
      <hr style={{
  width: '25%', /* Adjust width as needed */
  margin: 'auto', /* Center align the line */
  borderTop: '2px solid Black', /* Line thickness and color */
  marginTop: '-5px' /* Space between the text and the line */
}} />
      <div className='row mt-2 pt-2'>
        <div className='col-12 ' >
          <AliceCarousel
            mouseTracking
            items={items}
            autoPlay
            infinite
            disableDotsControls
            disableButtonsControls
            autoPlayInterval={2000}
            responsive={{
              0: { items: 1 },
              576: { items: 2 },
              768: { items: 3 },
              992: { items: 4 },
            }}
            style={{ width: '100%' }} // Ensure carousel takes full width
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
