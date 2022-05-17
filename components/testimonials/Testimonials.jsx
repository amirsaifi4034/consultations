import React from 'react';
import styles from './Testimonials.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import Testimonial_card from "./Testimonial_card";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export const Testimonials = () => {
    const TestimonialCard = [
        {
            id: 0,
            testimonialImg: '/images/user.jpg',
            testimonialReview: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora tenetur totam asperiores sequi id illum sunt reprehenderit magni pariatur, quaerat provident numquam voluptate, quam, modi excepturi quod aspernatur architecto dolorum!',
            testimonialName: 'Amir Saifi'
        },
        {
            id: 1,
            testimonialImg: '/images/user.jpg',
            testimonialReview: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora tenetur totam asperiores sequi id illum sunt reprehenderit magni pariatur, quaerat provident numquam voluptate, quam, modi excepturi quod aspernatur architecto dolorum!',
            testimonialName: 'Amir Saifi'
        },
        {
            id: 2,
            testimonialImg: '/images/user.jpg',
            testimonialReview: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora tenetur totam asperiores sequi id illum sunt reprehenderit magni pariatur, quaerat provident numquam voluptate, quam, modi excepturi quod aspernatur architecto dolorum!',
            testimonialName: 'Amir Saifi'
        }
    ]
    return (
        <>
            <section className={styles.testimonials_sec}>
                <Container>
                    <Row>
                        <Col sm={12}>
                            <div className={`${styles.sec_head} mb-5 text-center`}>
                                <h1 className='mb-2 mb-sm-5'>What our <span className={styles.head_heighlight}>users</span> have to say</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam in a beatae sint sapiente cum reiciendis eum quam eligendi accusantium.</p>
                            </div>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={20}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                breakpoints={{
                                    640: {
                                      slidesPerView: 2,
                                    },
                                    768: {
                                      slidesPerView: 2,
                                    },
                                    1024: {
                                      slidesPerView: 2,
                                    },
                                  }}
                                className="testimonials_slider pb-4"
                            >
                                {TestimonialCard.map(testimonialCards =>
                                    <SwiperSlide key={testimonialCards.id}>
                                        <Testimonial_card test_card={testimonialCards} />
                                    </SwiperSlide>
                                )}
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Testimonials;