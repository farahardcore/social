
import * as serviceWorker from './serviceWorker';
import store from "./Redux/redux-store"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import Provider from "react-redux/lib/components/Provider";




 let rerenderEntireThree=()=> {
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>, document.getElementById('root'));
};
rerenderEntireThree();
store.subscribe(()=>{
    rerenderEntireThree();
});


serviceWorker.unregister();