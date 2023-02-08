import React from 'react';
import InnerBannerThree from '../API/InnerBannerThree.json';
import InnerBanner from '../components/Banner/InnerBanner';
import FeaturesContent from '../components/FeaturesContent/FeaturesContent';

const Services = () => {
  return (
    <React.Fragment>
      <main>
      {InnerBannerThree.map(value => <InnerBanner key={value.id} data={value} />)}
      <FeaturesContent />
      </main>
    </React.Fragment>
  )
}

export default Services;