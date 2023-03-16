import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { Provider } from 'react-redux';
// import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import 'react-bootstrap/dist/react-bootstrap';
import 'antd/dist/reset.css';
import 'swiper/react';
import '../src/assets/scss/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  ,
)
