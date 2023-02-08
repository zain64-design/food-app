import React from 'react';
import InnerBannerOne from '../API/InnerBannerOne.json';
import AboutContent from '../components/AboutContent/AboutContent';
import InnerBanner from '../components/Banner/InnerBanner';

const About = () => {
  return (
    <React.Fragment>
      <main>
      {InnerBannerOne.map(value => <InnerBanner key={value.id} data={value}/>)}
      <AboutContent/>
      </main>
    </React.Fragment>
  )
}

export default About