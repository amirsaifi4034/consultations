import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import styles from './Courses.module.css';
import {GiBookmarklet, GiDiploma} from 'react-icons/gi';
import {FaUserGraduate} from 'react-icons/fa';
import Courses_slider from './Courses_slider';

export const Courses = () => {
  return (
    <>
        <section className={styles.courses_section}>
            <Container>
                <Row>
                    <Col sm={10} className="offset-sm-1 px-0 px-sm-4 ">
                       <div className={`${styles.sec_head} mb-5 text-center`}>
                           <h1>We provide consultations for over <span className={styles.head_heighlight}>30 Courses</span></h1>
                           <p>Select education mode and specialization to quick start the consultations!</p>
                       </div>
                    </Col>
                </Row>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                            <Nav.Link className={`${styles.coursetabs} mb-2`} eventKey="first"> <GiBookmarklet /> Under Graduate</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link className={`${styles.coursetabs} mb-2`} eventKey="second"> <FaUserGraduate /> Post Graduate</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link className={`${styles.coursetabs} mb-2`} eventKey="third"> <GiDiploma /> Diploma & Certificate</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col sm={9}>
                        <Tab.Content className='ps-0 ps-lg-5'>
                            <Tab.Pane eventKey="first">
                                <Courses_slider />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Courses_slider />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Courses_slider />
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </section>
    </>
  )
}

export default Courses