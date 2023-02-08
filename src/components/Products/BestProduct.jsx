import React from 'react';

const BestProduct = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      {
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
          <div className="card burger-card">
            <div className="img">
              <img src={props.data.thumbnail} className="img-fluid thumb" alt="" />
            </div>

            <div className="desc">
              <a href="/" className="anchor">{props.data.title}</a>
              <span>{props.data.Name}</span>
              <p>{props.data.description}</p>
              <a href="/" className="btn order-btn">order now</a>
            </div>
          </div>
        </div>
      }
    </React.Fragment>
  )
}

export default BestProduct