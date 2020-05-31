import * as serviceWorker from './serviceWorker';
import store from "./Redux/redux-store"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";
import 'typeface-roboto';

ReactDOM.render(

    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>
       , document.getElementById('root'));


serviceWorker.unregister();