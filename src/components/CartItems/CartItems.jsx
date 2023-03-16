import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'

const CartItems = () => {
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
                                            <th scope="col"></th>
                                            <th scope="col">quantity</th>
                                            <th scope="col">price</th>
                                            <th scope="col">total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="img-main">
                                                    <img src="images/tp-sl1.png" className="img-fluid cart-img" alt="" />
                                                </div>
                                            </td>

                                            <td>
                                                <div className="cart-desc">
                                                    <div className="dsc-lt">
                                                        <h6 className="pro-name">Kotton Krack Dog Sticker - Bully Sqaud</h6>
                                                        <ul>
                                                            <li> <strong>Product</strong> Stickers</li>
                                                            <li> <strong>Color</strong> Multicolor</li>
                                                        </ul>
                                                    </div>
                                                    <div className="dsc-rt">
                                                        <a href="javascript:;" className="edit">
                                                            edit
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                {/* <div className="input-group">
                                                <span className="input-group-btn">
                                                    <button type="button" className="quantity-left-minus btn btn-quant btn-number" data-type="minus" data-field="">
                                                        <i className="fal fa-minus"></i>
                                                    </button>
                                                </span>
                                                <input type="text" id="quantity" name="quantity" className="form-control input-number" value="10" min="1" max="100">
                                                    <span className="input-group-btn">
                                                        <button type="button" className="quantity-right-plus btn btn-quant btn-number" data-type="plus" data-field="">
                                                            <i className="fal fa-plus"></i>
                                                        </button>
                                                    </span>
                                            </div> */}
                                            </td>
                                            <td>
                                                <h6 className="price">$20.90</h6>
                                            </td>
                                            <td>
                                                <h6 className="price">$20.80</h6>
                                            </td>
                                        </tr>
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