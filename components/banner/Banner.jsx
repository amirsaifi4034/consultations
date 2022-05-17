import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import styles from './Banner.module.css';
import BannerTextImg from '../banner/BannerTextImg';
import BannerDetailContent from './BannerDetailContent';

const Banner = () => {

    const [activeSlide, setActiveSlide] = useState(0);

    const bannerContDynamic = [
        {
            id: 0,
            banImg: "/images/Artboard1.jpg",
            h1Text: "Connect with an expert in 60 seconds",
            BtnOne: "know more"
        },
        {
            id: 1,
            banImg: "/images/Artboard2.jpg",
            h1Text: "Get guidance from verified counselors only",
            BtnOne: "know more"
        },
        {
            id: 2,
            banImg: "/images/Artboard3.jpg",
            h1Text: "Get Counselling on a variety of courses",
            BtnOne: "know more"
        },
        {
            id: 3,
            banImg: "/images/Artboard4.jpg",
            h1Text: "Review options from Distance online & study abroad programs",
            BtnOne: "know more"
        },
        {
            id: 4,
            banImg: "/images/Artboard5.jpg",
            h1Text: "We provide 100% unbiased counselling",
            BtnOne: "know more"
        }
    ]

    return (
        <>
            <section className='banerSection'>
                <div className={`${styles.bannerContainer}`}>
                    <Carousel onSelect={(selectedIndex, e) => setActiveSlide(selectedIndex)} fade>
                        {bannerContDynamic.map(bannercard =>
                            <Carousel.Item key={bannercard.id}>
                                <BannerTextImg BannerTextCard={bannercard} />
                            </Carousel.Item>
                        )}
                    </Carousel>
                    <BannerDetailContent activeSlide={activeSlide} />
                </div>          
            </section>
        </>
    )
}

export default Banner