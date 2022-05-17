import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Slides_item from './Slides_item';

export const Courses_slider = () => {

    const SliderItems = [
        {
            id: 0,
            slider_img: "/images/emba.jpg",
            slider_title: "Executive MBA",
            slider_counselor: "1 Counselor"
        },
        {
            id: 1,
            slider_img: "/images/mcom.jpeg",
            slider_title: "M.Com",
            slider_counselor: "1 Counselor"
        },
        {
            id: 2,
            slider_img: "/images/mtech.jpeg",
            slider_title: "M.Tech",
            slider_counselor: "1 Counselor"
        }
    ]
  return (
    <>
        <Swiper
            breakpoints={{
                0: {
                    width: 0,
                    slidesPerView: 1,
                },
                // when window width is >= 640px
                640: {
                    width: 640,
                    slidesPerView: 2,
                },
                768: {
                    width: 768,
                    slidesPerView: 3,
                },
            }}
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            loop
            modules={[Pagination]}
            className="courses_slider pb-4"
            >
            {SliderItems.map(SliderCourseItem =>
                <SwiperSlide key={SliderCourseItem.id}>
                    <Slides_item course_items={SliderCourseItem} />
                </SwiperSlide>
            )}
        </Swiper>
    </>
  )
}

export default Courses_slider;