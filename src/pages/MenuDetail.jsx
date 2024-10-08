import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Ratings from '../components/Rating/Ratings';
import axios from 'axios';
import { Col,Card,Row,Container } from 'react-bootstrap';

const MenuDetail = () => {
  const [details, setdetails] = useState([]);
  const params = useParams();
  console.log(params);

  // Axios method
  const baseURL = 'https://zain64-design.github.io/product-detail.json';
  // const baseURL = `https://demo-customprojects.com/developer/weed-entertainment/api/video-detail/${params.id}`;

  useEffect(() => {

    // AXIOS method
    axios.get(baseURL).then((response) => {
      // console.log(response.data.response);
      // setdetails(response.data.response);
      console.log(response.data);
      setdetails(response.data);
    })
  }, []);

  return (
    <>
      <main>
        <section className="sec-menu-detail pt-5 mt-5">
          <Container className="">
            <Row>
              <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
              <Card className="burger-card" key={details.id}>
                  <div className="img">
                    <img src={details.image} className="img-fluid thumb" alt="" />
                  </div>

                  <div className="desc">
                    <h6 className="anchor">{details.name}</h6>
                    <Ratings name={details.ratings} />
                    <span className="number">{details.ratings}</span>
                    <div className="ct-flex">
                      <p>{details.price} <del>{details.oldPrice}</del> </p>
                      <a href="/" className="btn order-btn hvr-bounce-to-right">add to cart</a>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  )
}

export default MenuDetail