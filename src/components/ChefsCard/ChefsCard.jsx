import React from 'react';

const ChefsCard = (props) => {
  return (
    <React.Fragment>
      <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
        <div className="card feature-card">
          <div className="img">
            <img src={props.data.image} className="img-fluid thumb" alt="" />
          </div>

          <div className="desc">
            <a href="/" className="anchor">{props.data.Head}</a>
            <p>{props.data.para}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ChefsCard