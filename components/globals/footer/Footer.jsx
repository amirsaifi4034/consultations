import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import {MdMailOutline} from 'react-icons/md';
import {IoMdCall} from 'react-icons/io';
import {GrFacebookOption, GrLinkedinOption, GrYoutube} from 'react-icons/gr';
import {FaTwitter} from 'react-icons/fa';
import {AiTwotoneHeart} from 'react-icons/ai';

export const Footer = () => {
  return (
    <>
        <footer className={styles.footer_sec}>
            <Container>
                <Row>
                    <Col sm={5}>
                        <div className='text-white pe-0 pe-sm-5'>
                            <Image src="/images/logo.png" width="120px" height="60px" alt="Logo"></Image>
                            <p className={`${styles.footer_info} mt-2 mt-sm-4`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nisi dolor doloremque quisquam aliquam voluptatum enim ad.</p>
                        </div>
                    </Col>
                    <Col sm={3}>
                        <div className={styles.footer_list}>
                            <h5 className='text-white fw-bold mb-2 mb-sm-4'>Inside</h5>
                            <Link href="/"><a>Find Counselore</a></Link>
                            <Link href="/"><a>Video Consult</a></Link>
                            <Link href="/"><a>courses</a></Link>
                            <Link href="/"><a>Testimonials</a></Link>
                            <Link href="/"><a> Blog</a></Link>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className={`${styles.footer_list} ${styles.footer_icon}`}>
                            <h5 className='text-white fw-bold mb-2 mb-sm-4'>Contact us</h5>
                            <div><Link href="/"><a><MdMailOutline /> Info@collegevidya.com</a></Link></div>
                            <div className="mb-3"><Link href="/"><a><IoMdCall /> 1800-420-5757</a></Link></div>
                            <Link href="/"><a><GrFacebookOption /></a></Link>
                            <Link href="/"><a><FaTwitter /></a></Link>
                            <Link href="/"><a><GrLinkedinOption /></a></Link>
                            <Link href="/"><a><GrYoutube /></a></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className={`${styles.copyright} mt-2 mt-sm-4`}>
                <div>
                    <p className='mb-0'>Copyright &copy; Collegevidya.com | All Right Reserved</p>
                </div>
                <div>
                    <p className='mb-0'>Build With <span><AiTwotoneHeart /></span> Made In India</p>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer;