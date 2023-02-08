import React from 'react';
import Aboutdata from '../../API/About.json';

const About_Content = () => {
    return (
        <React.Fragment>
            <section className="sec-about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            {Aboutdata.map((value) => (
                                <div className="img" key={value.id}>
                                    <img src={value.image} className="img-fluid thumb" alt="" />
                                </div>
                            ))}
                        </div>

                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            {Aboutdata.map((value) => (
                                <div className="desc" key={value.id}>
                                    <h6>{value.subHead}</h6>
                                    <h3>{value.Head}</h3>
                                    <p>{value.para}</p>
                                    <div className="btn-grp">
                                        <a href="/" className="btn ep-btn hvr-bounce-to-right">discover more</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default About_Content