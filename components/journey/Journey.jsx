
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Journey.module.css';
import Journey_cards from './Journey_cards';

export const Journey = () => {
    const journey_cards_1 = {
        steps_count: "Step 1",
        steps_info: "Select a course and education mode",
        steps_img: "/images/step1.png"
    };
    const journey_cards_2 = {
        steps_count: "Step 2",
        steps_info: "Make a quick payment & instantly connect with an available expert",
        steps_img: "/images/step2.png"
    };
    const journey_cards_3 = {
        steps_count: "Step 3",
        steps_info: "Get your queries addressed by our expert",
        steps_img: "/images/step3.png"
    };
    const journey_cards_4 = {
        steps_count: "Step 4",
        steps_info: "Provide your valuable feedback",
        steps_img: "/images/step4.png"
    };

    const journey_cards_5 = {
        steps_count: "Step 5",
        steps_info: "Still have doubts? Don't worry! You also get 3 follow-up calls free of cost",
        steps_img: "/images/step5.png"
    };
  return (
    <>
        <section className={styles.journey_section}>
            <Container>
                <Row className="position-relative">
                    <Col sm={10} className="offset-sm-1 px-0 px-sm-4 ">
                       <div className={`${styles.sec_head} mb-5 text-center`}>
                           <h1>Lorem ipsum <span className={styles.head_heighlight}> dolor </span></h1>
                           <p>Lorem ipsum dolor sit amet. consectetur adipiscing elit.</p>
                       </div>
                    </Col>

                    <div className={`${styles.journey_progress} d-none d-sm-block`}></div>
                    <Col sm={6}></Col>
                    <Col sm={6}>
                        <Journey_cards journey_cards={journey_cards_1} />
                    </Col>
                    <Col sm={6}>
                        <Journey_cards journey_add_class={true} journey_cards={journey_cards_2} />
                    </Col>
                    <Col sm={6}></Col>
                    <Col sm={6}></Col>
                    <Col sm={6}>
                        <Journey_cards journey_cards={journey_cards_3} />
                    </Col>
                    <Col sm={6}>
                        <Journey_cards journey_add_class={true} journey_cards={journey_cards_4} />
                    </Col>
                    <Col sm={6}></Col>
                    <Col sm={6}></Col>
                    <Col sm={6}>
                        <Journey_cards journey_cards={journey_cards_5} />
                    </Col>

                </Row>
            </Container>
        </section>
    </>
  )
}

export default Journey;