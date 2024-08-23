import React from 'react';
import { useState, useEffect } from 'react';
import MenuProduct from '../Products/MenuProduct';
import { useSelector } from 'react-redux';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { Col, Container, Row } from 'react-bootstrap';
import useFetch from '../../hooks/useFetch';

const PopularMenu = () => {


  const dataFetch = useFetch();

  if(!dataFetch.isLoading && !dataFetch.data) {
    dataFetch.fetchData();
  }

  // const productStore = useSelector(function (state) {
  //   // never return whole state from use selector
  //   return state;
  // });

  // const { products } = productStore;

  // const allData = products;
  
  // const [Menu, setMenu] = useState([]);
  // const baseURL = 'https://zain64-design.github.io/product.json';
  // useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     setMenu(response.data)
  //   })
  // }, []);
  

  return (
    <>
      <section className="sec-menu">
        <Container className="position-relative">
          <div className="headings">
            <h6>Most popular menu</h6>
          </div>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <Swiper className='product-slider'
                // install Swiper modules
                modules={[Navigation, Pagination]}
                loop={false}
                navigation={{
                  prevEl: '.swiper-button-prev',
                  nextEl: '.swiper-button-next',
                }}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  300: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  575: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  767: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  991: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1199: {
                    slidesPerView: 2,
                    spaceBetween: 35,
                  },
                  1399: {
                    slidesPerView: 3,
                    spaceBetween: 35,
                  },
                }}
              >
                {/* {Menu.map(value =>
                  <SwiperSlide key={value.id}>
                    <MenuProduct data={value} />
                  </SwiperSlide>)} */}


                  {/* {allData.map((value)=>(
                    <SwiperSlide key={value.id}>
                    <MenuProduct />
                  </SwiperSlide>
                  ))} */}

<SwiperSlide>
<MenuProduct />
</SwiperSlide>
                  
              </Swiper>
            </Col>
            {/* {Menu.map(value => <MenuProduct key={value.id} data={value} />)} */}
          </Row>
        </Container>

        {/* <div className="custom-shape-divider-bottom-1663634746">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div> */}
      </section>
    </>
  )
}

export default PopularMenu