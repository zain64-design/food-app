import React, {useEffect} from 'react';
import MenuProduct from '../Products/MenuProduct';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { Col, Container, Row } from 'react-bootstrap';
import useFetch from '../../hooks/useFetch';


const PopularMenu = () => {

  const dataFetch = useFetch();

  // useEffect(()=> {

  //   if (!dataFetch.isLoading && !dataFetch.data) {
  //     dataFetch.fetchData();
  //   }

  // },[dataFetch]);

  if (!dataFetch.isLoading && !dataFetch.data) {
    dataFetch.fetchData();
  }


  return (
    <>
      <section className="sec-menu">
        <Container className="position-relative">
          <div className="headings">
            <h6>Most popular menu</h6>
          </div>
          <Row>
            {/* <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <Swiper className='product-slider'
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

                <SwiperSlide>
                  
                </SwiperSlide>

              </Swiper>
            </Col> */}
            <MenuProduct />
          </Row>
        </Container>
      </section>
    </>
  )
}

export default PopularMenu