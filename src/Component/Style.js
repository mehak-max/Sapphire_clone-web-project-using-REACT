import React from 'react';
import { style } from '../Data/Data';
import { MdOutlineShoppingBag } from "react-icons/md"; // Import the bag icon

const Style = () => {
  // Create card elements from the data
  const items = style.map((item, i) => (
    <div key={i} className='col-md-3 col-sm-6 col-12 p-3 position-relative'>
      <div className='card' style={{ border: 'none', borderRadius: '0px' }}>
        <div className='position-relative'>
          <img
            src={item.image}
            alt={item.name}
            className='card-img-top'
            style={{
              width: '100%',
              height: 'auto', // Maintain aspect ratio    
            }}
          />
          {/* Bag icon */}
          <MdOutlineShoppingBag
            className='position-absolute'
            style={{
              top: '10px',
              right: '10px',
              fontSize: '30px',
              color: 'white', // Grey color
              backgroundColor: 'black', // Semi-transparent white background
              borderRadius: '50%',
              padding: '5px',
            }}
          />
        </div>
        <div className='card-body p-3 text-center' style={{ backgroundColor: '#FBF5DF' }}>
          <h5 className='card-title'>{item.title}</h5>
          <p className='card-text' style={{ marginTop: '-7px', color: 'grey', fontSize: '13px' }}>{item.user}</p>
          <p className='card-text' style={{ marginTop: '-15px', color: 'grey', fontSize: '13px' }}>{item.description}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className='container mt-5 pt-5' style={{ backgroundColor: '#FBF5DF' }}>
      <h3 className='text-center' style={{ fontFamily: 'monospace', fontSize: '30px' }}>
        STYLED BY YOU
      </h3>
      <h4 className='text-center' style={{ fontFamily: 'monospace', fontSize: '20px' }}>
        SAPHIRExME
      </h4>
      <div className='row mt-2 pt-2'>
        {items}
      </div>
    </div>
  );
};

export default Style;
