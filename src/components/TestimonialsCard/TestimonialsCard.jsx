import React from 'react';
import TestimonialAPI from '../../API/Testimonials.json';
import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

const TestimonialsCard = () => {
    return (
        <React.Fragment>
            <section className="sec-testimonial">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <Swiper className='testimonial-slider'
                                // install Swiper modules
                                modules={[Navigation, Pagination, Scrollbar, A11y, FreeMode]}
                                freeMode={false}
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
                                navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                            // onSwiper={(swiper) => console.log(swiper)}
                            // onSlideChange={() => console.log('slide change')}
                            >
                                {TestimonialAPI.map(value =>
                                    <SwiperSlide key={value.id}>
                                        <div className="row align-items-center justify-content-between">
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5">
                                                <div className="desc">
                                                    <h6 className='animate__animated animate__bounce'>{value.subHead}</h6>
                                                    <h3>{value.Head}</h3>
                                                    <p>{value.para}</p>
                                                    <h5>{value.client}</h5>
                                                    <span>{value.desig}</span>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                                <div className="img">
                                                    <img src={value.image} className="img-fluid thumb" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>)}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default TestimonialsCard