import React from 'react';
import Ratings from '../Rating/Ratings';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/actions/productList';

const MenuProduct = () => {
  const cart = useSelector(function (state) {
    return state.cart;
  });
  

  const isLoading = useSelector(function (state) {
    return state.isLoading;
  });

  const products = useSelector(function (state) {
    return state.products;
  });

  const allData = products;
  

  const dispatch = useDispatch()

  const handleAddToCart = (value)=> {
    return ()=> {
      dispatch(addToCart(value));
    }
  }


  if (isLoading) {
    return <h1>loading data</h1>
  }

  return (
    <>
      {allData?.map((value) => (
        <Card className="burger-card" key={value.id}>
            <div className="img">
              <img src={value.image} className="img-fluid thumb" alt="" />
            </div>

            <div className="desc">
              <Link to={`/MenuDetail/${value.id}`} className="anchor">{value.name}</Link>
              <Ratings name={value.ratings} />
              <span className="number">{value.ratings}</span>
              <div className="ct-flex">
                <p>{value.price} <del>{value.oldPrice}</del> </p>
                <button onClick={handleAddToCart(value)} className="btn order-btn hvr-bounce-to-right">add to cart</button>
              </div>
            </div>
          </Card>
        
      ))}
    </>
  )
}

export default MenuProduct;