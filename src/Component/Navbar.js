
import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { Link } from'react-router-dom'
const Navbar = () => {
  return (
    <div>
    {/* 1st Navbar  */}
     <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><h2 style={{  fontSize: '40px' }}>SAPHIRE</h2></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <form class="d-flex input-group w-100 " style={{marginLeft:'20%',marginRight:'11%'}}>
      <input
        type="search"
        class="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon" 
      />
      <span class="input-group-text text-white border-0" id="search-addon" >
        <i class="fas fa-search" style={{color:'black'}}></i>
      </span>
    </form>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0 " style={{marginLeft:'3%'}}>
      <li className="nav-item dropdown">
          <Link className="nav-link active dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Ship to a different location <i class="fa-solid fa-map-pin" style={{color: '#e60000'}}></i>
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Another action</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#"><TbTruckDelivery /></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#"><i class="fa-regular fa-user" style={{color: '#000000'}}></i></Link>
        </li>
       

      </ul>     
    </div>
  </div>
</nav>
   <hr style={{
  width: '100%', /* Adjust width as needed */
  margin: 'auto', /* Center align the line */
  borderTop: '1px solid Black', /* Line thickness and color */
  marginTop: '-5px' /* Space between the text and the line */
}} />
    {/* 2cnd Navbar  */}
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto  mb-lg-0"  >
        <li className="nav-item px-2">
          <Link className="nav-link active" aria-current="page" to="/Newin">NEW IN
          </Link>
        </li>
        <li className="nav-item px-2">
          <Link className="nav-link active" aria-current="page" to="/Women">WOMAN</Link>
        </li>
        <li className="nav-item px-2">
          <Link className="nav-link active" aria-current="page" to="#">MAN</Link>
        </li>
        <li className="nav-item px-2 ">
          <Link className="nav-link active" aria-current="page" to="#">KIDS</Link>
        </li>
        <li className="nav-item px-2">
          <Link className="nav-link active" aria-current="page" to="#">ACCESSORIES</Link>
        </li>
        <li className="nav-item px-2">
          <Link className="nav-link active" aria-current="page" to="#">HOME</Link>
        </li>
        <li className="nav-item px-2">
          <Link className="nav-link active" aria-current="page" to="#">THE EDIT</Link>
        </li>
      </ul>
   
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar