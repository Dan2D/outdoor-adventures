import React from 'react';
import ReactDOM from 'react-dom';
import App from "./Components/App/App";
import 'bootstrap/dist/css/bootstrap.min.css'
import  "./index.scss";

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js');
  });
}

ReactDOM.render(<App />, document.getElementById("root"));


  