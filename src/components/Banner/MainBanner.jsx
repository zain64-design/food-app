import React from 'react'
import Banner from '../../API/Banner.json';
import {NavLink} from 'react-router-dom';

const Mainbanner = () => {
  return (
    <React.Fragment>
      <section className="sec-home-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              {Banner.map((value) => (
                <div className="desc" key={value.id}>
                  <h6>{value.head}</h6>
                  <p>{value.para}</p>
                  <div className="btn-grp">
                    <NavLink to="/Menu" className="btn ep-btn hvr-bounce-to-right">explore menu</NavLink>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              {Banner.map((value) => (
                <div className="img" key={value.id}>
                  <img src={value.image} className="img-fluid thumb" alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Mainbanner