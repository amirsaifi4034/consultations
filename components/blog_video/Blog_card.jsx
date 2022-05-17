import React from 'react';
import Image from 'next/image';
import { Col } from 'react-bootstrap';
import Link from 'next/link';
import styles from './BlogVideo.module.css';

export const Blog_card = (props) => {
  return (
    <>
        <Col sm={4}>
            <div className={`${styles.blogvideo} card`}>
                <div className={styles.blogvideo_media}>
                    {props.blogcard.playbutton}
                    <Image src={props.blogcard.blogimg} width="350px" height="230px" alt="Blog"></Image>
                </div>
                <div className={`${styles.blogvideo_content} card-body`}>
                    <h6 className="fw-bold">{props.blogcard.blogtitle}</h6>
                </div>
                <div className={styles.card_footer}>
                    <p className='m-0'>{props.blogcard.bloglikeview}</p>
                    <p className='m-0' style={{fontSize: "16px"}}>
                    <Link href="/"><a style={{color: "red"}}> {props.blogcard.blogheart} </a></Link>
                    <Link href="/"><a style={{color: "#0089e5"}}> {props.blogcard.blogshare} </a></Link>
                    </p>
                </div>
            </div>
        </Col>
    </>
  )
}

export default Blog_card;