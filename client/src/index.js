import React from 'react';
import ReactDOM from 'react-dom/client';
// import News from './components/News.js';
// import App from './components/App.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <News /> */}
  </React.StrictMode>
);
// Again
const divOfHeader = document.querySelector('.Header-of');
const scroller = document.createElement('div');

scroller.setAttribute('solid', '');
divOfHeader.before(scroller);

const windObserver = new IntersectionObserver((entries) => {
  divOfHeader.classList.toggle('solid', !entries[0].isIntersecting);
});

windObserver.observe(scroller);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
