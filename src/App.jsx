import React, { useEffect } from 'react';
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
import useFetch from './hooks/useFetch';


const App = () => {

  const dataFetch = useFetch();

  if (!dataFetch.isLoading && !dataFetch.data) {
    dataFetch.fetchData();
  }


  return (
        <Router>
          {/* <SecureComponent/> */}
          <WavyContainer />
          {/* to connect with browser url we need Router component to import this for use */}
          <Header />
          <Routes>
            {/* In Route we need to pass some props(Data) using path attr to store information where we want to navigate. we use exact keyword to tell the browser which comp we want to render */}
            <Route path="/" index element={<Home />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/MenuDetail/:id" element={<MenuDetail />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Blogs" element={<Blogs />} />
            <Route path="/About" element={<About />} />
            <Route path="/Testimonials" element={<Testimonials />} />
            <Route path="/Chefs" element={<Chefs />} />
            <Route path="/Contact" element={<ContactUs />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Gallery" element={<Gallery />} />
          </Routes>
          <Footer />
        </Router>
  );
}

export default App;

