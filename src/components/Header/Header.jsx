import React from 'react';
import { NavLink } from 'react-router-dom';
import header_logo from '../../assets/images/logo.png';


window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 50);
});

const Header = () => {
  return (
    <React.Fragment>
      <header className="fixed-top">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <NavLink className="navbar-brand" to={'/'}>
              <img src={header_logo} className="logo" alt="" />
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                  <NavLink className="nav-link hvr-underline-from-left" to={'/'}>
                    home
                    </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link hvr-underline-from-left" to={'/About'}>about us</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link hvr-underline-from-left" to={'/Menu'}>menu</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link hvr-underline-from-left" to={'/Services'}>services</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link hvr-underline-from-left" to={'/Blogs'}>blog</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link hvr-underline-from-left" to={'/Contact'}>contact us</NavLink>
                </li>
              </ul>
              <ul className="side-ul">
                <li className="sd-li">
                  <button type="button" className="btn login-btn hvr-bounce-to-right" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    sign in
                  </button>
                </li>
                <li className="sd-li">
                <NavLink className="cart-btn hvr-bounce-to-right" to={'/Cart'}>
                  <i className="fa-solid fa-basket-shopping"></i>
                </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </React.Fragment>
  )
}

export default Header;