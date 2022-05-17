import React from 'react';
import Image from 'next/image';
import styles from './Courses.module.css';

export const Slides_item = (props) => {
  return (
    <>
        <div className={styles.course_slider}>
            <div className={`${styles.course_slider_img} position-relative`}>
                <Image src={props.course_items.slider_img} layout='fill' alt="Course"></Image>
            </div>
            <div className={`${styles.course_slider_text}`}>
                <h5 className="mb-1">{props.course_items.slider_title}</h5>
                <small><b>{props.course_items.slider_counselor}</b>Available</small>
            </div>
        </div>
    </>
  )
}

export default Slides_item;
