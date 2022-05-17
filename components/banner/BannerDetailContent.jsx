import React from 'react';
import styles from './Banner.module.css';

export const BannerDetailContent = (props) => {
    
    return (
        <>
            <div className={`${styles.progressBarContainer}`}>
                <div className='position-relative'>
                
                    <div className={`${styles.progressBar}`}>
                        {props.activeSlide === 0 ?
                            <div className={`${styles.progAnimation}`}></div>
                            :
                            null
                        }
                    </div>
                    <p>Instant Consultation</p>
                </div>
                <div className='position-relative'>
                    <div className={`${styles.progressBar}`}>
                        {props.activeSlide === 1 ?
                            <div className={`${styles.progAnimation}`}></div>
                            :
                            null
                        }
                    </div>
                    <p>Certified Counselor</p>
                </div>
                <div className='position-relative'>
                    <div className={`${styles.progressBar}`}>
                        {props.activeSlide === 2 ?
                            <div className={`${styles.progAnimation}`}></div>
                            :
                            null
                        }
                    </div>
                    <p>30+ Courses</p>
                </div>
                <div className='position-relative'>
                    <div className={`${styles.progressBar}`}>
                        {props.activeSlide === 3 ?
                            <div className={`${styles.progAnimation}`}></div>
                            :
                            null
                        }
                    </div>
                    <p>Education Modes</p>
                </div>
                <div className='position-relative'>
                    <div className={`${styles.progressBar}`}>
                        {props.activeSlide === 4 ?
                            <div className={`${styles.progAnimation}`}></div>
                            :
                            null
                        }
                    </div>
                    <p>Trustworthy </p>
                </div>
            </div>
        </>
    )

}



export default BannerDetailContent;