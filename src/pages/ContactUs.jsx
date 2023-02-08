import React from 'react';
import InnerBannerOne from '../API/InnerBannerOne.json';
import ContactForm from '../components/ContactForm/ContactForm';
import InnerBanner from '../components/Banner/InnerBanner';

const ContactUs = () => {
  return (
    <React.Fragment>
      <main>
      {InnerBannerOne.map(value => <InnerBanner key={value.id} data={value}/>)}
      <ContactForm/>
      </main>
    </React.Fragment>
  )
}

export default ContactUs;