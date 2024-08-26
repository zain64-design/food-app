import React, { useCallback } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Ratings from '../Rating/Ratings';
import { MdAutoDelete } from "react-icons/md";
import { removeFromCart } from '../../Redux/actions/productList';


const CartItems = () => {

  const basket = useSelector(state => state.cart);

  const dispatch = useDispatch();

  const handleRemoveItem = useCallback((id) => {
    return () => {
      dispatch(removeFromCart(id));
      alert(id)
    }
  }) 


  return (
    <>
      <section className="sec-cart">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={9} xl={9} xxl={9}>
              <div className="table-responsive">
                <Table className="table cart-table">
                  <thead>
                    <tr>
                      <th scope="col">Products</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">total</th>
                      <th scope="col">actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {basket && Object.keys(basket).length > 0 ? (
                      Object.keys(basket).map((key) => {
                        const cart = basket[key];

                        const product = cart.value;

                        console.log({cart});

                        const {image,name,oldPrice,price,ratings } = product;
                                                
                        return (
                          <tr key={key}>
                            <td>
                              <div className="img-main">
                                <img src={image} className="img-fluid cart-img" alt="" />
                              </div>
                            </td>

                            <td>
                              <div className="cart-desc">
                                <div className="dsc-lt">
                                  <h6 className="pro-name">{name}</h6>
                                  <ul>
                                    <li>
                                      <strong>old price</strong> <del>{oldPrice}</del>
                                    </li>
                                    <li>
                                      <strong>Rating</strong> {ratings}{' '}
                                      <Ratings name={ratings} />
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td>

                            <td>
                              <h6 className="price">{price}</h6>
                            </td>
                            <td>
                              <h6 className="price">{cart.count}</h6>
                            </td>
                            <td>
                              <h6 className="price">${ (cart.count * parseFloat(price.replace('$', ''))).toFixed(2) }</h6>
                            </td>
                            <td><button onClick={handleRemoveItem(key)} type='button' className='btn btn-danger'><MdAutoDelete /></button></td>
                          </tr>
                        );
                      })
                      // Object.keys(cart).map((value) => {
                      //   const products = cart[value];
                      //   const { big_image, title, rank, rating, year, genre } = products;

                      //   return (
                      //     <tr key={value}>
                      //       <td>
                      //         <div className="img-main">
                      //           <img src={big_image} className="img-fluid cart-img" alt="" />
                      //         </div>
                      //       </td>

                      //       <td>
                      //         <div className="cart-desc">
                      //           <div className="dsc-lt">
                      //             <h6 className="pro-name">{title}</h6>
                      //             <ul>
                      //               <li>
                      //                 <strong>Rank</strong> {rank}
                      //               </li>
                      //               <li>
                      //                 <strong>Rating</strong> {rating}{' '}
                      //                 <Ratings name={rating} />
                      //               </li>
                      //             </ul>
                      //           </div>
                      //         </div>
                      //       </td>

                      //       <td>
                      //         <h6 className="price">{genre[0]}</h6>
                      //       </td>
                      //       <td>
                      //         <h6 className="price">{year}</h6>
                      //       </td>
                      //       <td>
                      //         <h6 className="price">{year}</h6>
                      //       </td>
                      //     </tr>
                      //   );
                      // })
                    ) : (
                      <tr>
                        <td colSpan="5" className="text-center">
                          No items in the cart
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </div>
            </Col>
            {/* <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
              <div className="card checkout-box">
                <div className="details">
                  <div className="summary">
                    <h6>Order Summary</h6>
                    <p>You can view, add or delete products from the cart</p>
                    <hr />
                    <ul className="total-ul">
                      <li>Items <span>02</span></li>
                      <li>Total <span>$35.25</span></li>
                    </ul>
                  </div>
                  <div className="sub-total">
                    <ul className="total-ul">
                      <li>Sub Total <span>$35.25</span></li>
                    </ul>
                  </div>
                </div>
                <a href="" className="btn checkout-btn">checkout now</a>
              </div>
            </div> */}

          </Row>
        </Container>
      </section>
    </>
  )
}

export default CartItems