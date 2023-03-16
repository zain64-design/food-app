import React from 'react';
import ChefsCardData from '../../API/Chefs.json';
import ChefsHead from '../../API/ChefHead.json';
import ChefsCard from '../ChefsCard/ChefsCard';
import { Col, Container, Row } from 'react-bootstrap';

const ChefsContent = () => {
  return (
    <>
      <section className="sec-chefs">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              {ChefsHead.map((value) => (
                <div className="head" key={value.id}>
                  <h6>{value.subHead}</h6>
                  <h3>{value.Head}</h3>
                </div>
              ))}
            </Col>
          </Row>

          <Row className="justify-content-evenly">
            {ChefsCardData.map(value => <ChefsCard key={value.id} data={value} />)}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default ChefsContent