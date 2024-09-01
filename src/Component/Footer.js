import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      
      {/* Footer  */}
      <div> 
<footer className="text-center text-lg-start bg-body-tertiary text-muted">
  <section className>
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mt-5">
          <h6 className="text-uppercase fw-bold mb-4">
            Contact Us
          </h6>
          <div>
          <p>
            <i className="fas fa-envelope me-3" />
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3" /> + 01 234 567 88</p></div>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4 mt-5">
            Customer Care
          </h6>
          <p>
            <Link to="#!" className="text-reset">FAQs</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset">Exchange and return policy</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset">Contact us</Link>
          </p>
         
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-5 ">
          <h6 className="text-uppercase fw-bold mb-4 mt-5">
            Information
          </h6>
          <p>
            <Link to="#!" className="text-reset">About Us</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset">Privacy Policy</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset">Payments</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset">Safety Pay Guide</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset">Blogs</Link>
          </p>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4 mt-5">News letter signUp</h6>
          <p>Subscribe to our newsletter and get 5% off your first purchase</p>
          <p>
          <input type="email" id="form5Example22" placeholder='Your Email Address' class="form-control" />
          <button type="submit" className="btn btn-dark mt-2" style={{borderRadius:'50px'}}>Subscribe</button>

          </p>
          <p> <div class="container-fluid">
  

  </div> </p>
        </div>
      </div>
    </div>
  </section>
  <nav className="navbar navbar-expand-lg  " style={{backgroundColor:'white'}}>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          <Link className="nav-link active " aria-current="page" href="#">@Copyright 2024 SAPHIRE</Link>
        </li>
        <div className='container '>
  <Link className="navbar-brand" to="#">
    <img src="/Images/logo1.webp" alt="Avatar Logo" style={{width: '80%',marginLeft:'150%'}} className="rounded-pill" /> 
  </Link>
</div>
      </ul>
    </div>
  </div>
</nav>
</footer>


      </div>
    </div>
  )
}
export default Footer
