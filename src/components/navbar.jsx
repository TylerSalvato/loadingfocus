import { useContext } from 'react';
import StoreContext from '../state/storeContext';
import "./navbar.css";

import {Link} from 'react-router-dom';

function Navbar(){
    let user = useContext(StoreContext).user;
    let cart = useContext(StoreContext).cart;

    return (
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
      LoadingFocus
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/catalog">
            Catalog
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/admin">
            Admin
          </Link>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <div className="user-info">
        <label>{user.name}</label><i class="fa-regular fa-circle-user"></i></div>
        
        <Link className="btn btn-outline-success" to="/cart">
          {cart.length}
          <i class="fa-solid fa-cart-shopping"></i>
        </Link>
      </form>
    </div>
  </div>
</nav>
    )
}

export default Navbar;


/**
 * 
 * create the component (jsx, css)
 * 
 * app js;
 * -import
 * -create a route
 * 
 * navbar
 * -create a menu item
 * 
 * -create cart
 * 
 */

