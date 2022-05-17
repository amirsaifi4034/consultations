import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Container, Row, Col, Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import styles from './CvApps.module.css';

export const Cv_apps = () => {
  return (
    <>
        <section className={styles.cv_apps_sec}>
            <Container>
                <Row>
                    <Col sm={5}>
                        <div className={styles.apps_img}>
                            <Image src="/images/video_mobile.png" alt="video Call" width="380px" height="600px"></Image>
                        </div>
                    </Col>
                    <Col sm={7}>
                        <div className={styles.apps_content}>
                            <div className={`${styles.sec_head} mb-5`}>
                                <h1><span className={styles.head_heighlight}>Download</span> the College Vidya App</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptate unde eius optio consectetur maiores! Alias accusamus, </p>
                            </div>
                            <h4>Get the link to download the app</h4>
                            <Form>
                                <Row>
                                    <Col sm={9}>
                                    <InputGroup className={styles.input_box}>
                                        <InputGroup.Text  id="basic-addon1">+91</InputGroup.Text>
                                        <FormControl className={styles.inputfiles}
                                            placeholder="enter phone no."
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                    </Col>
                                    <Col sm={3}>
                                        <Button className={styles.button_apps}>Send SMS</Button>
                                    </Col>
                                </Row>
                            </Form>
                            <Link href="/"><a><Image src="/images/googleplay.png" width="165px" height="55px" alt="Google Play"></Image></a></Link>
                            <Link href="/"><a className='ms-1 ms-md-2'><Image src="/images/appstore.png" width="165px" height="55px" alt="App Store"></Image></a></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Cv_apps;