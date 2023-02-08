import React from 'react';
import FooterAPI from '../../API/Footer.json';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <React.Fragment>
            <footer>
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-3 col-xxl-3">
                                {FooterAPI.map((value) => (
                                    <div className="footer-box" key={value.id}>
                                        <div className="img-logo">
                                            <img src={value.image} className="img-fluid logo-footer" alt="" />
                                        </div>
                                        <div className="desc">
                                            <p>{value.para}</p>
                                        </div>
                                        <ul className="social-ul">
                                            <li className="sc-li">
                                                <a href="/" className="icons">
                                                <i className="fa-brands fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li className="sc-li">
                                                <a href="/" className="icons">
                                                <i className="fa-brands fa-instagram"></i>
                                                </a>
                                            </li>
                                            <li className="sc-li">
                                                <a href="/" className="icons">
                                                <i className="fa-brands fa-youtube"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-2 col-xxl-2">
                                <div className="footer-box">
                                    <h6>Links</h6>
                                    <ul>
                                        <li>
                                            <NavLink className="links hvr-underline-from-left" to={'/'}>home</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="links hvr-underline-from-left" to={'/Services'}>services</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="links hvr-underline-from-left" to={'/Blogs'}>blog</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="links hvr-underline-from-left" to={'/Contact'}>contact us</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-2 col-xxl-2">
                                <div className="footer-box">
                                    <h6>About</h6>
                                    <ul>
                                        <li>
                                            <NavLink className="links hvr-underline-from-left" to={'/About'}>about us</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="links hvr-underline-from-left" to={'/Menu'}>menu</NavLink>
                                        </li>
                                        {/* <li>
                                            <NavLink className="links hvr-underline-from-left" to={'/'}>testimonials</NavLink>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>

                            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-2 col-xxl-2">
                                <div className="footer-box footer-extra">
                                    <h6>contact us</h6>
                                    <ul className="ext-ul">
                                        <li>
                                            <span>phone:</span>
                                            <a href="tel:+2112312312">
                                                021-123-123-12
                                            </a>
                                        </li>
                                        <li>
                                            <span>mail:</span>
                                            <a href="mailto:info@example.com">
                                                info@example.com
                                            </a>
                                        </li>
                                        <li>
                                            <span>location:</span>
                                            <p>
                                                123 Main Street North America
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-3 col-xxl-3">
                                <div className="footer-box">
                                    <h6>newsletter</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, voluptates.</p>
                                    <form action="">
                                        <div className="row">
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                <div className="form-main">
                                                    <input type="text" className="form-control letter-ctl" placeholder='enter your email' />
                                                    <button type='submit' className="btn hvr-bounce-to-right submit-btn">send</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer