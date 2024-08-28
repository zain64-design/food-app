import React, { useState, useLayoutEffect, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { WavyLink } from "react-wavy-transitions";
// import $ from "jquery";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import header_logo from '../../assets/images/logo.png';

const Header = () => {

const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  function handleScroll() {
    setIsScrolled(window.scrollY > 0);
  }

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  const cart =  useSelector((state)=> state?.cart?.data)

  

  let cartCount = 0;

  Object.keys(cart || {}).forEach((key) => {
    const data =  cart[key];
    cartCount = cartCount + data.count;
  });

  return (
    <React.Fragment>
      <header className={`fixed-top ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="navbar navbar-expand-lg">
          <Container>
            <NavLink className="navbar-brand" to={'/'}>
              <img src={header_logo} className="logo" alt="" />
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                  <WavyLink direction="up" duration={3000} color="#ff9c3a" className="nav-link hvr-underline-from-left" to={'/'}>
                    home
                    </WavyLink>
                </li>
                <li className="nav-item">
                  <WavyLink direction="up" duration={3000} color="#ff9c3a" className="nav-link hvr-underline-from-left" to={'/About'}>about us</WavyLink>
                </li>
                <li className="nav-item">
                  <WavyLink direction="up" duration={3000} color="#ff9c3a" className="nav-link hvr-underline-from-left" to={'/Menu'}>menu</WavyLink>
                </li>
                <li className="nav-item">
                  <WavyLink direction="up" duration={3000} color="#ff9c3a" className="nav-link hvr-underline-from-left" to={'/Services'}>services</WavyLink>
                </li>
                {/* <li className="nav-item">
                  <WavyLink direction="up" duration={3000} color="#ff9c3a" className="nav-link hvr-underline-from-left" to={'/Blogs'}>blog</WavyLink>
                </li> */}
                <li className="nav-item">
                  <WavyLink direction="up" duration={3000} color="#ff9c3a" className="nav-link hvr-underline-from-left" to={'/Contact'}>contact us</WavyLink>
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
                  <span className='cart-total'>{cartCount}</span>
                </NavLink>
                </li>
              </ul>
            </div>
          </Container>
        </nav>
      </header>
    </React.Fragment>
  )
}

export default Header;

