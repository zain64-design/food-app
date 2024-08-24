import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Ratings from '../Rating/Ratings';


const CartItems = () => {

    const cart = useSelector(state => state.cart);


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
                                            <th scope="col">Genre</th>
                                            <th scope="col">price</th>
                                            <th scope="col">total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {cart && cart.length > 0 ?(
                                            
                                        data):(
                                             <tr>
                                                 <td colSpan="5" className="text-center">No items in the cart</td>
                                             </tr>
                                        )} */}
                                        {Object.keys(cart).map((value)=>{

                                            const products = cart[value];
                                            const {big_image,title,rank,rating,year,genre} = products;

                                            return (
                                                <tr key={value.id}>
                                                <td>
                                                    <div className="img-main">
                                                        <img src={big_image} className="img-fluid cart-img" alt="" />
                                                    </div>
                                                </td>
    
                                                <td>
                                                    <div className="cart-desc">
                                                        <div className="dsc-lt">
                                                            <h6 className="pro-name">{title}</h6>
                                                            <ul>
                                                                <li> <strong>Rank</strong> {rank}</li>
                                                                <li> <strong>Rating</strong> {rating}   <Ratings name={rating}/></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>
    
                                                <td>
                                                    <h6 className="price">{genre[0]}</h6>
                                                </td>
                                                <td>
                                                    <h6 className="price">{year}</h6>
                                                </td>
                                                <td>
                                                    <h6 className="price">{year}</h6>
                                                </td>
                                            </tr>
                                            )
                                        })}
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
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
                                <a href="javascript:;" className="btn checkout-btn">checkout now</a>
                            </div>
                        </div>

                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CartItems