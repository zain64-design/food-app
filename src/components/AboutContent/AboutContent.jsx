import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Aboutdata from '../../API/About.json';

const About_Content = () => {
    return (
        <React.Fragment>
            <section className="sec-about">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                            {Aboutdata.map((value) => (
                                <div className="img" key={value.id}>
                                    <img src={value.image} className="img-fluid thumb" alt="" />
                                </div>
                            ))}
                        </Col>

                        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                            {Aboutdata.map((value) => (
                                <div className="desc" key={value.id}>
                                    <h6>{value.subHead}</h6>
                                    <h3>{value.Head}</h3>
                                    <p>{value.para}</p>
                                    <div className="btn-grp">
                                        <a href="/" className="btn ep-btn hvr-bounce-to-right">discover more</a>
                                    </div>
                                </div>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default About_Content