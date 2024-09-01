import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'; // Import Alice Carousel CSS
import { card3 } from '../Data/Data';

const Newcircle = () => {
  // Create carousel items from the data
  const items = card3.map((item, i) => (
    <div key={i} className='carousel-item' style={{ 
      width: '200px', // Fixed width for each item
      margin: '0 10px', // Margin between items
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div className='card' style={{ border: 'none', borderRadius: '0px' }}>
        <img
          src={item.image}
          alt={item.name}
          className='card-img-top image-fluid'
          style={{
            width: '130px', // Width of image
            height: '130px',
            borderRadius: '50%', // Circular image
            objectFit: 'cover',
            border: '2px solid grey'
          }}
        />
        <div className='card-body p-3 m-2'>
          <p className='card-text'>{item.description.slice(0,10)}...</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className='container mt-5 pt-5'>
      <div className='row'>
        <div className=' col-md-2 col-sm-12  text-center' style={{  marginTop: '5%', fontSize: '30px' }}>
          <h3>NEW IN</h3>
        </div>
        <div className='  col-md-10'>
          <AliceCarousel
            mouseTracking
            items={items}
            autoPlay
            infinite
            disableDotsControls
            disableButtonsControls
            autoPlayInterval={3000}
            responsive={{
            //   0: { items: 3 },
            //   600: { items: 3 },
            //   1024: { items: 6 },
            //   1440: { items: 6 },
              0: { items: 2 },       // Extra small screens
              576: { items: 3 },     // Small screens
              768: { items: 3 },     // Medium screens
              992: { items: 4 },     // Large screens
              1024 : {items : 6},
              1200: { items: 6 },     // Extra large screens
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Newcircle;
