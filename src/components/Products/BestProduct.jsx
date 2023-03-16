import React from 'react';
import { Col } from 'react-bootstrap';

const BestProduct = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      {
        <Col xs={12} sm={12} md={4} lg={3} xl={3} xxl={3}>
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
        </Col>
      }
    </React.Fragment>
  )
}

export default BestProduct