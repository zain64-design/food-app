import React from 'react';
import Ratings from '../Rating/Ratings';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const MenuProduct = (props) => {
  // console.log(props);
  return (
    <React.Fragment>
      {
        <Card className="burger-card">
          <div className="img">
            <img src={props.data.image} className="img-fluid thumb" alt="" />
          </div>

          <div className="desc">
            <Link to={`/MenuDetail/${props.data.id}`} className="anchor">{props.data.name}</Link>
            <Ratings name={props.data.ratings} />
            <span className="number">{props.data.ratings}</span>
            <div className="ct-flex">
              <p>{props.data.price} <del>{props.data.oldPrice}</del> </p>
              <a href="/" className="btn order-btn hvr-bounce-to-right">add to cart</a>
            </div>
          </div>
        </Card>
      }
    </React.Fragment>
  )
}

export default MenuProduct;