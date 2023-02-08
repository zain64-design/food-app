import React from 'react';
import InnerBannerOne from '../API/InnerBannerFour.json';
import InnerBanner from '../components/Banner/InnerBanner';
import CartItems from '../components/CartItems/CartItems';
const Cart = () => {
  return (
    <React.Fragment>
      <main>
      {InnerBannerOne.map(value => <InnerBanner key={value.id} data={value}/>)}
      <CartItems/>
      </main>
    </React.Fragment>
  )
}

export default Cart;