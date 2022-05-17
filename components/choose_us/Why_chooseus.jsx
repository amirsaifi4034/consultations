import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Choose_items from './Choose_items';
import styles from './Whychoose.module.css';
import Image from 'next/image';


export const Why_chooseus = () => {

    const chooseItem = [
        {
            id: 0,
            chooseLeft: 'A Team of',
            chooseBold: '20,000+',
            chooseRight: 'Counselors'
        },
        {
            id: 1,
            chooseLeft: 'Assiting Students from across',
            chooseBold: '15+',
            chooseRight: 'Stats'
        },
        {
            id: 2,
            chooseLeft: '',
            chooseBold: '2000+',
            chooseRight: 'Daily Live Video Counseling Sessions'
        }
    ]

    const chooseItems = [
        {
            id: 0,
            chooseLeft: '',
            chooseBold: '1 Lakh+',
            chooseRight: 'Careers Built so far'
        },
        {
            id: 1,
            chooseLeft: 'Expert assistance in finding the right university from',
            chooseBold: '100+',
            chooseRight: 'Options'
        },
        {
            id: 2,
            chooseLeft: '',
            chooseBold: '3 Lakh+',
            chooseRight: 'Students review Our Platform monthly'
        }
    ]

  return (
    <>
        <section className={`${styles.whychoose_sec} text-white`}>
            <Container>
                <Row>
                    <Col sm={10} className="offset-sm-1 px-0 px-sm-4 ">
                        <div className={`${styles.sec_head} mb-5 text-center pb-0 pb-sm-5`}>
                            <h1 className='fw-bold'>Why Choose Us</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </Col>
                    <Col sm={3} className="text-lg-end ps-lg-5">
                        {chooseItem.map(chooseUs => 
                            <Choose_items key={chooseUs.id} chooseusItem={chooseUs} />
                        )}
                    </Col>
                    <Col sm={6}>
                        <div className={`${styles.choose_center_img} position-relative`}>
                            <Image src="/images/choose1.png" layout="fill" alt="Why choose"></Image>
                        </div>
                    </Col>
                    <Col sm={3} className="pe-lg-3">
                        {chooseItems.map(chooseUs => 
                            <Choose_items key={chooseUs.id} chooseusItem={chooseUs} />
                        )}
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Why_chooseus;