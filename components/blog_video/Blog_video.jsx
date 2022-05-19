
import React from 'react';
import {Tabs, Tab, Container, Row, Col} from 'react-bootstrap';
import styles from './BlogVideo.module.css';
import {FaHeart} from 'react-icons/fa';
import {AiOutlineShareAlt} from 'react-icons/ai';
import Blog_card from './Blog_card';
import Play_button from '../globals/play_button/Play_button';

export const Blog_video = () => {
    const BlogCard = [
        {
            id: 0,
            blogimg: '/images/mcom.jpeg',
            blogtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            bloglikeview: '7033 View | 1.3M Likes | 2330 Shares',
            blogheart: <FaHeart />,
            blogshare: <AiOutlineShareAlt /> 
        },
        {
            id: 1,
            blogimg: '/images/mtech.jpeg',
            blogtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            bloglikeview: '7033 View | 1.3M Likes | 2330 Shares',
            blogheart: <FaHeart />,
            blogshare: <AiOutlineShareAlt /> 
        },
        {
            id: 2,
            blogimg: '/images/emba.jpg',
            blogtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            bloglikeview: '7033 View | 1.3M Likes | 2330 Shares',
            blogheart: <FaHeart />,
            blogshare: <AiOutlineShareAlt /> 
        },
        {
            id: 3,
            blogimg: '/images/mcom.jpeg',
            blogtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            bloglikeview: '7033 View | 1.3M Likes | 2330 Shares',
            blogheart: <FaHeart />,
            blogshare: <AiOutlineShareAlt /> 
        }
    ]
    const VideoCard = [
        {
            id: 0,
            blogimg: '/images/mcom.jpeg',
            playbutton: <Play_button />,
            blogtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            bloglikeview: '7033 View | 1.3M Likes | 2330 Shares',
            blogheart: <FaHeart />,
            blogshare: <AiOutlineShareAlt /> 
        },
        {
            id: 1,
            blogimg: '/images/mcom.jpeg',
            playbutton: <Play_button />,
            blogtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            bloglikeview: '7033 View | 1.3M Likes | 2330 Shares',
            blogheart: <FaHeart />,
            blogshare: <AiOutlineShareAlt /> 
        }
    ]
  return (
    <>
    <section className={styles.Blog_videosec}>
        <Container>
            <Row>
                <Col>
                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="home" title="Blog">
                            <Row>
                                {BlogCard.map(blog_cards =>
                                    <Blog_card key={blog_cards.id} blogcard={blog_cards} />
                                )}
                            </Row>
                        </Tab>
                        <Tab eventKey="profile" title="Video" className={styles.videosCard}>
                        <Row>
                            {VideoCard.map(video_cards =>
                                <Blog_card key={video_cards.id} blogcard={video_cards} />
                            )}
                        </Row>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}
