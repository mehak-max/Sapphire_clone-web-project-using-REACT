import React from 'react';
import { card5 } from '../Data/Data';

const Wcircle = () => {
  // Create card items from the data
  const items = card5.map((item, i) => (
    <div key={i} className='carousel-item' style={{ 
      width: '125px', // Fixed width for each item
      margin: '0 10px', 
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
          <p className='card-text'>{item.description}...</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className='container mt-5 pt-5' style={{marginright:'17%'}}>
      <div className='row ' >
        <div className='col-md-2 col-sm-12 text-center' style={{ marginTop: '5%', fontSize: '30px' }}>
          <h3>WOMEN</h3>
        </div>
        <div className='col-md-10'>
          <div className='d-flex flex-wrap'>
            {items}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wcircle;
