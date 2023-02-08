import React from 'react';
import PopularMenu from '../components/PopularMenu/PopularMenu';
import InnerBannerTwo from '../API/InnerBannerTwo.json';
import InnerBanner from '../components/Banner/InnerBanner';

const Menu = () => {
  return (
    <React.Fragment>
      <main>
        {InnerBannerTwo.map(value => <InnerBanner key={value.id} data={value} />)}
        <PopularMenu />
      </main>
    </React.Fragment>
  )
}

export default Menu;