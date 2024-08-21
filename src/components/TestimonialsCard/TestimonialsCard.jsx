import React from 'react';
import TestimonialAPI from '../../API/Testimonials.json';
import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { Col, Container, Row } from 'react-bootstrap';

const TestimonialsCard = () => {
    return (
        <React.Fragment>
            <section className="sec-testimonial">
                <Container>
                    <Row>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <Swiper className='testimonial-slider'
                                // install Swiper modules
                                modules={[Navigation, Pagination]}
                                navigation={{
                                    prevEl: '.swiper-button-prev',
                                    nextEl: '.swiper-button-next',
                                  }}
                                loop={true}
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
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                    991: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                    1199: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                    1399: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                }}
                            >
                                {TestimonialAPI.map(value =>
                                    <SwiperSlide key={value.id}>
                                        <div className="row align-items-center justify-content-between">
                                            <Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5}>
                                                <div className="desc">
                                                    <h6 className='animate__animated animate__bounce'>{value.subHead}</h6>
                                                    <h3>{value.Head}</h3>
                                                    <p>{value.para}</p>
                                                    <h5>{value.client}</h5>
                                                    <span>{value.desig}</span>
                                                </div>
                                            </Col>
                                            <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                                                <div className="img">
                                                    <img src={value.image} className="img-fluid thumb" alt="" />
                                                </div>
                                            </Col>
                                        </div>
                                    </SwiperSlide>)}
                            </Swiper>
                        </div>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default TestimonialsCard