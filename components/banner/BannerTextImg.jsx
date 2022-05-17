import React from 'react';
import {Carousel,section,Button} from 'react-bootstrap';
import styles from './Banner.module.css';
import Image from 'next/image';


export const BannerTextImg = (props) =>{
    return(
        <>            
            <Image className="d-block w-100" layout='fill' src={props.BannerTextCard.banImg} alt="slide" />
            <Carousel.Caption className={`${styles.bannerTextCont}`}>
                <h1>{props.BannerTextCard.h1Text}</h1>
                <h4>{props.BannerTextCard.h5Text}</h4>
                <div className={`${styles.banerBtnCont}`}>                   
                    <Button className={`${styles.enrolBtn}`}>{props.BannerTextCard.BtnOne}</Button>
                </div>
            </Carousel.Caption>
        </>
    )
}

export default BannerTextImg;