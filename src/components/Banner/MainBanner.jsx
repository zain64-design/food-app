import React from 'react'
import Banner from '../../API/Banner.json';
import {NavLink} from 'react-router-dom';
import { Container,Row,Col } from 'react-bootstrap';
import Text from '../Text/Text';

const Mainbanner = () => {
  return (
    <React.Fragment>
      <section className="sec-home-banner">
        <Container>
          <Row className='align-items-center'>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
              {Banner.map((value) => (
                <div className="desc" key={value.id}>
                  <h6>{value.head}</h6>
                  <Text as="p" className='para'>{value.para}</Text>
                  <div className="btn-grp">
                    <NavLink to="/Menu" className="btn ep-btn hvr-bounce-to-right">explore menu</NavLink>
                  </div>
                </div>
              ))}
            </Col>

            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
              {Banner.map((value) => (
                <div className="img" key={value.id}>
                  <img src={value.image} className="img-fluid thumb" alt="" />
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}

export default Mainbanner