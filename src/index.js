import React from 'react';
import ReactDOM from 'react-dom';
import App from "./Components/App/App";
import 'bootstrap/dist/css/bootstrap.min.css'
import  "./index.scss";

ReactDOM.render(<App />, document.getElementById("root"));

module.hot.accept();