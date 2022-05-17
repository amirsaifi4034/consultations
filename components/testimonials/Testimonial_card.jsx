import React from 'react';
import styles from './Testimonials.module.css';
import Image from 'next/image';

export const Testimonial_card = (props) => {
  return (
    <>
        <div className={styles.testimonials_card}>
            <div className={styles.testi_img}>
                <Image src={props.test_card.testimonialImg} width="100px" height="100px" alt="Testimonials"></Image>
            </div>
            <div className={styles.test_content}>
                <p>{props.test_card.testimonialReview}</p>
                <h6>{props.test_card.testimonialName}</h6>
            </div>
        </div>
    </>
  )
}

export default Testimonial_card;