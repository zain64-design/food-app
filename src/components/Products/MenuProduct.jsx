import React from 'react';
import Ratings from '../Rating/Ratings';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { SwiperSlide } from 'swiper/react';
import { addToCart } from '../../Redux/actions/productList';

const MenuProduct = () => {
  // console.log(props);

  // here we are passing call back fn in useSelector hook to call this hook to get the whole state of application:
  const cart = useSelector(function (state) {
    // never return whole state from use selector
    return state.cart;
  });
  
  console.log(cart);
  

  const isLoading = useSelector(function (state) {
    // never return whole state from use selector
    return state.isLoading;
  });

  const products = useSelector(function (state) {
    // never return whole state from use selector
    return state.products;
  });

  const allData = products;
  

  const dispatch = useDispatch()

  const handleAddToCart = (value)=> {
    // here we can call the action creator to add the product to the cart
    // dispatch(addToCart(product)); we are using currying
    return ()=> {
      dispatch(addToCart(value));
    }
  }


  if (isLoading) {
    return <h1>loading data</h1>
  }

  return (
    <>
      {
        // <Card className="burger-card">
        //   <div className="img">
        //     <img src={props.data.image} className="img-fluid thumb" alt="" />
        //   </div>

        //   <div className="desc">
        //     <Link to={`/MenuDetail/${props.data.id}`} className="anchor">{props.data.name}</Link>
        //     <Ratings name={props.data.ratings} />
        //     <span className="number">{props.data.ratings}</span>
        //     <div className="ct-flex">
        //       <p>{props.data.price} <del>{props.data.oldPrice}</del> </p>
        //       <a href="/" className="btn order-btn hvr-bounce-to-right">add to cart</a>
        //     </div>
        //   </div>
        // </Card>
      }

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