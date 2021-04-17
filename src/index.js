import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom'
import 'react-lazy-load-image-component/src/effects/blur.css';


import "./_base.scss";


ReactDOM.render(
<Provider store={store}>
    <Router>
        <App/>
    </Router>
</Provider>,


document.getElementById("root"));