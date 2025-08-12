import React from 'react'
import Hero from '../components/Hero';
import Featuredhotel from '../components/Featuredhotel';
import Offer from '../components/Offer';
import Testimonials from '../components/Testimonials';
import SubscribeForm from '../components/SubscribeForm';
import Footer from '../components/Footer';
const Homepage = () => {
  return (
    <>
    <Hero />
    <Featuredhotel/>
    <Offer />
    <Testimonials />
    <SubscribeForm />
    
    </>
  )
}

export default Homepage;
