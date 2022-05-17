import Image from 'next/image';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from './Journey.module.css';

export const Journey_cards = (props) => {
  return (
    <>
        <div className={styles.journey_cards}>
            <Row className={`${props.journey_add_class ? styles.active_journey : ''} align-items-center`}>
                <Col sm={6}>
                    <h4 className="fw-bold">{props.journey_cards.steps_count}</h4>
                    <p>{props.journey_cards.steps_info}</p>
                </Col>
                <Col sm={6}>
                    <div className={`${styles.journey_card_img} position-relative`}>
                        <Image src={props.journey_cards.steps_img} layout='fill' alt="Step"></Image>
                    </div>
                </Col>
            </Row>
        </div>
    </>
  )
}

export default Journey_cards;