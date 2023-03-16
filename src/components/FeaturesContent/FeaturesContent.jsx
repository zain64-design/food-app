import React from 'react';
import FeatureHead from '../../API/FeatureHead.json';
import Feature from '../../API/Feature.json';
import FeaturesCard from '../FeaturesCard/FeaturesCard';
import { Col, Container, Row } from 'react-bootstrap';

const FeaturesContent = () => {
    return (
        <>
            <section className="sec-features">
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                            {FeatureHead.map((value) => (
                                <div className="head" key={value.id}>
                                    <h6>{value.subHead}</h6>
                                    <h3>{value.Head}</h3>
                                </div>
                            ))}
                        </Col>
                    </Row>

                    <Row className="justify-content-evenly">
                        {Feature.map(value => <FeaturesCard key={value.id} data={value} />)}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default FeaturesContent