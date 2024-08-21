import React from 'react';
import AboutContent from '../components/AboutContent/AboutContent';
import Mainbanner from '../components/Banner/MainBanner';
import ChefsContent from '../components/ChefsContent/ChefsContent';
import PopularMenu from '../components/PopularMenu/PopularMenu';
import TestimonialsCard from '../components/TestimonialsCard/TestimonialsCard';
import FeaturesContent from '../components/FeaturesContent/FeaturesContent'
import GalleryContent from '../components/GalleryContent/GalleryContent';


const Home = () => {
  return (
    <>
    <main>
    <Mainbanner/>
      {/* <BestSellers heading="our best sellers"/> */}
      <PopularMenu/>
      <AboutContent/>
      <GalleryContent/>
      <FeaturesContent/>
      <TestimonialsCard/>
      <ChefsContent/>     
    </main>
    </>
  )
}

export default Home;