import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'; // Import Alice Carousel CSS
import { Trend } from '../Data/Data';

const Trending = () => {
  // Create carousel items from the data
  const items = Trend.map((item, i) => (
    <div key={i} className='trending-card' style={{ border: 'none', borderRadius: '0px' }}>
      <img
        src={item.image}
        alt={item.name}
        className='trending-card-img mx-4'
      />
      <div className='trending-card-body p-3 '>
        <h6 className='card-title'>{item.title}</h6>
        <p className='card-text' style={{ marginBottom: '3%' }}>{item.description}</p>
        <p className='card-text' style={{ marginBottom: '3%', color: 'grey' }}>{item.price}</p>
        <button className='trending-card-button'>ADD TO BAG</button> {/* Button */}
      </div>
    </div>
  ));

  return (
    <div className='container-fluid mt-5 pt-5'>
      <h3 className='text-center' style={{ fontFamily: 'monospace', fontSize: '30px' }}>
        TRENDING
      </h3>
      <hr style={{
  width: '15%', /* Adjust width as needed */
  margin: 'auto', /* Center align the line */
  borderTop: '2px solid Black', /* Line thickness and color */
  marginTop: '-5px' /* Space between the text and the line */
}} />
      <div className='row mt-3 pt-3'>
        <div className='col-12'>
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

export default Trending;
