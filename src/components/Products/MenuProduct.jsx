import React, { useCallback } from 'react';
import Ratings from '../Rating/Ratings';
import { Link } from 'react-router-dom';
import { Card,Col } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { SwiperSlide } from 'swiper/react';
import { addToCart } from '../../Redux/actions/cart';
import ContentLoader from '../Loader/ContentLoader';

const MenuProduct = () => {

  const dispatch = useDispatch();
  // here we are passing call back fn in useSelector hook to call this hook to get the whole state of application: // never return whole state from use selector
  const isLoading = useSelector(state => state.products.isLoading);// subsrcribe loading state
  const products = useSelector(state => state?.products?.data);
  const errors = useSelector(state => state.products.error);


  const handleAddToCart = useCallback((value) => {
        // here we can call the action creator to add the product to the cart
    // dispatch(addToCart(product)); we are using currying
    return () => {
      dispatch(addToCart(value));
    };
  }, [dispatch]);


  if (isLoading) {
    return <ContentLoader/>
  }

  if (errors) {
    return <h6>Error: {errors}</h6>
  }

  return (
    <>

        {products?.slice(0, 9).map((value) => (
        <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4} key={value.id} className='mb-4'>
        <Card className="burger-card">
            <div className="img">
              <img src={value.image} className="img-fluid thumb" alt="" />
            </div>

            <div className="desc">
              <Link to={`/MenuDetail/${value.id}`} className="anchor">{`${value.name.substring(0,30)}...`}</Link>
              <Ratings name={value.ratings} />
              <span className="number">{value.ratings}</span>
              <div className="ct-flex">
                <p>{value.price} <del>{value.oldPrice}</del> </p>
                <button onClick={handleAddToCart(value)} className="btn order-btn hvr-bounce-to-right">add to cart</button>
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </>
  )
}

export default MenuProduct;