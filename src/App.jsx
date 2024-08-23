import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WavyContainer, WavyLink } from "react-wavy-transitions";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import MenuDetail from './pages/MenuDetail';
import Services from './pages/Services';
import Blogs from './pages/Blogs';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Testimonials from './pages/Testimonials';
import Chefs from './pages/Chefs';
import Cart from './pages/Cart';
import Gallery from './pages/Gallery';
import SecureComponent from './SecureComp';
import { Provider } from 'react-redux';
import { store } from './Redux';


const App = () => {
  return (
    <>
    
      <Router>
        <Provider store={store}>
                  {/* <SecureComponent/> */}
      <WavyContainer />
        {/* to connect with browser url we need Router component to import this for use */}
        <Header />
        <Routes>
          {/* In Route we need to pass some props(Data) using path attr to store information where we want to navigate. we use exact keyword to tell the browser which comp we want to render */}
          <Route exact path="/" index element={<Home />} />
          <Route exact path="/Menu" element={<Menu />} />
          <Route exact path="/MenuDetail/:id" element={<MenuDetail />} />
          <Route exact path="/Services" element={<Services />} />
          <Route exact path="/Blogs" element={<Blogs />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Testimonials" element={<Testimonials />} />
          <Route exact path="/Chefs" element={<Chefs />} />
          <Route exact path="/Contact" element={<ContactUs />} />
          <Route exact path="/Cart" element={<Cart />} />
          <Route exact path="/Gallery" element={<Gallery />} />
        </Routes>
        <Footer />
        </Provider>
      </Router>
    </>
  );
}

export default App;


// how to fetch api using axios and usestate, useeffect

