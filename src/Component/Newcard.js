import React from 'react';
import { card4 } from '../Data/Data';
import { Link } from'react-router-dom';
const Newcard = () => {
  return (
    <div className='container-fluid'>
      <div className="d-flex justify-content-between mx-3">
        <div><p style={{fontSize:'20px'}}>Filter</p></div>
        <div><ul><li className="nav-item dropdown" style={{ listStyleType: 'none' }}>
          <Link className="nav-link active dropdown-toggle p-2" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{border:'1px solid grey', borderRadius:'30px'}}>
            Featured 
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Another action</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </li></ul></div>
      </div>

      <div className='row'>
        {card4.map((item, i) => (
          <div key={i} className='col-md-4 col-sm-6 col-lg-3 col-12 p-3'>
            <div className='newcard-card' style={{border:'none', borderRadius:'none'}}>
              <img src={item.image} alt={item.name} className='card-img-top image-fluid' />
              <div className='card-body p-3 m-2'>
                <h5 className='card-title'>{item.title}</h5>
                <p className='card-text' style={{ marginBottom: '-8px' }}>{item.description}</p>
                <p className='card-text' style={{ marginBottom: '-9px', color: 'grey' }}>{item.price}</p>
                <button className='newcard-button'>ADD TO BAG</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Newcard;
