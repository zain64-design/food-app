import React, { useState, useLayoutEffect } from 'react';
import { Container } from 'react-bootstrap';
// import $ from "jquery";
import { NavLink } from 'react-router-dom';
import header_logo from '../../assets/images/logo.png';

const Header = () => {
  // window.addEventListener("scroll", function () {
  //   var header = document.querySelector("header");
  //   header.classList.toggle("sticky", window.scrollY > 50);
  //   console.log('.................gotcha');
  // });

//   $(window).scroll(function() {
//     var scroll = $(window).scrollTop();
//     if (scroll >= 60) {
//         $('header').addClass("sticky");
//     } else {
//         $('header').removeClass("sticky");
//     }
// });

const [isScrolled, setIsScrolled] = useState(false);

useLayoutEffect(() => {
  function handleScroll() {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    console.log("isScrolled", isScrolled);
  }

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

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
          </Container>
        </nav>
      </header>
    </React.Fragment>
  )
}

export default Header;

