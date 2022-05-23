import React from 'react';
import Banner from '../components/banner/Banner';
import { Blog_video } from '../components/blog_video/Blog_video';
import Why_chooseus from '../components/choose_us/Why_chooseus';
import Courses from '../components/courses/Courses';
import Cv_apps from '../components/cv_apps/Cv_apps';
import Footer from '../components/globals/footer/Footer';
import { Header } from '../components/globals/header/Header';
import Testimonials from '../components/testimonials/Testimonials';
import Steps from '../components/steps/Steps';

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Courses />
      <Why_chooseus />
      <Steps />
      <Blog_video />
      <Testimonials />
      <Cv_apps />
      <Footer />
    </>
  )
}
