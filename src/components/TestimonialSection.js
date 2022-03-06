import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import TestimonImg from '../img/testimonial1.png'
import TestimonImg2 from '../img/testimonial2.png'
import TestimonImg3 from '../img/testimonial3.png'

const TestimonialSection = () => {
  return (
    <>
    <section className="testimonial section">
                <span className="section__subtitle">My clients say</span>
                <h2 className="section__title">Testimonial</h2>

                <div className="testimonial__container container ">

                        <Swiper
                         spaceBetween={50}
                         autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                         pagination={{ clickable: true }}
                         modules={[Autoplay,Pagination]}
                         breakpoints={{
                            576: {
                              slidesPerView: 1,
                            },
                            768: {
                              slidesPerView: 2,
                              spaceBetween: 48,
                            }, 
                          }}
                        >
                        <SwiperSlide className="testimonial__card swiper-slide">
                            <img src={TestimonImg} alt="" className="testimonial__img"/>

                            <h3 className="testimonial__name">Jhon Doe</h3>
                            <p className="testimonial__description">
                                A really good job, all aspects of the project were 
                                followed step by step and with good results.
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className="testimonial__card swiper-slide">
                            <img src={TestimonImg2} alt="" className="testimonial__img"/>

                            <h3 className="testimonial__name">Paula Vusy</h3>
                            <p className="testimonial__description">
                                A really good job, all aspects of the project were 
                                followed step by step and with good results.
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className="testimonial__card swiper-slide">
                            <img src={TestimonImg3} alt="" className="testimonial__img"/>

                            <h3 className="testimonial__name">Sara Cill</h3>
                            <p className="testimonial__description">
                                A really good job, all aspects of the project were 
                                followed step by step and with good results.
                            </p>
                        </SwiperSlide>
                        </Swiper>

                    
                </div>
            </section>
    </>
  )
}

export default TestimonialSection