import React from 'react'
import GalleryContent from '../components/GalleryContent/GalleryContent';
import InnerBanner from '../components/Banner/InnerBanner';
import InnerBannerOne from '../API/InnerBannerOne.json';

const Gallery = () => {
  return (
    <React.Fragment>
      {InnerBannerOne.map(value => <InnerBanner key={value.id} data={value}/>)}
    <GalleryContent/>
    </React.Fragment>
  )
}

export default Gallery