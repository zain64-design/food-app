import React from 'react';
// import InnerContent from './InnerContent';

const Inner_Banner = (props) => {
    console.log(props);
    return (
        <React.Fragment>
            <div className="sec-inner-banner">
                <div className="img-bg">
                    <img src={props.data.image} className="img-fluid thumb" alt="" />
                </div>
                <div className="over-content">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div className="desc">
                                    <h6>{props.data.head}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Inner_Banner