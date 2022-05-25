
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Steps.module.css";
import Steps_video from "./Steps_video";
import Steps_count from "./Steps_count";


export const Steps = () => {

    const videoCards = [
        {
            id: 0,
            videoCard: "/images/Artboard1.jpg"
        },
        {
            id: 1,
            videoCard: "/images/Artboard2.jpg"
        },
        {
            id: 2,
            videoCard: "/images/Artboard3.jpg"
        },
        {
            id: 3,
            videoCard: "/images/Artboard4.jpg"
        },
        {
            id: 4,
            videoCard: "/images/Artboard5.jpg"
        }
    ]
    const statusCards = [
        {
            id: 0,
            step_status: "STEP 1",
            step_detail: "Select a course and education mode"
        },
        {
            id: 1,
            step_status: "STEP 2",
            step_detail: "Make a quick payment & instantly connect with an available expert"
        },
        {
            id: 2,
            step_status: "STEP 3",
            step_detail: "Get your queries addressed by our expert"
        },
        {
            id: 3,
            step_status: "STEP 4",
            step_detail: "Provide your valuable feedback"
        },
        {
            id: 4,
            step_status: "STEP 5",
            step_detail: "Still have doubts? Don't worry! You also get 3 follow-up calls free of cost"
        }
    ]
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
        <section className={`${styles.Steps_sec} steps_slider `}>
            <Container>
                <Row className="position-relative">
                    <Col sm={10} className="offset-sm-1 px-0 px-sm-4 ">
                        <div className={`${styles.sec_head} mb-5 text-center`}>
                            <h1>Lorem ipsum <span className={styles.head_heighlight}> dolor </span></h1>
                            <p>Lorem ipsum dolor sit amet. consectetur adipiscing elit.</p>
                        </div>
                    </Col>
                    <Col sm={12}>
                        <div className="d-flex swiper_steps">
                            <Swiper
                                style={{
                                "--swiper-navigation-color": "#fff",
                                "--swiper-pagination-color": "#fff",
                                }}
                                slidesPerView={1}
                                loop={false}
                                navigation={false}
                                autoplay={{delay: 5000}}
                                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                modules={[ Autoplay, FreeMode, Navigation, Thumbs]}
                                className="mySwiper2"
                            >
                                {videoCards.map(StepsVideoCard => 
                                <SwiperSlide key={StepsVideoCard.id} >
                                    <Steps_video steps_video={StepsVideoCard} />
                                </SwiperSlide>
                                        
                                )}
                            </Swiper>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                loop={false}
                                spaceBetween={10}
                                slidesPerView={4}
                                autoplay={{delay: 5000}}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[Autoplay, FreeMode, Navigation, Thumbs]}
                                className="mySwiper"
                            >
                            {statusCards.map(stepsCountmap => 
                                <SwiperSlide key={stepsCountmap.id}>
                                    <Steps_count stepsCount={stepsCountmap} />
                                </SwiperSlide>
                            )}
                            </Swiper>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section> 
    </>
  )
}

export default Steps;