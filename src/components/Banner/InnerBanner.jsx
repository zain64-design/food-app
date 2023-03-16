import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
// import InnerContent from './InnerContent';

const Inner_Banner = (props) => {
    console.log(props);
    return (
        <React.Fragment>
            <section className="sec-inner-banner">
                <div className="img-bg">
                    <img src={props.data.image} className="img-fluid thumb" alt="" />
                </div>
                <div className="over-content">
                    <Container>
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                                <div className="desc">
                                    <h6>{props.data.head}</h6>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Inner_Banner