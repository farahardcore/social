
import * as serviceWorker from './serviceWorker';
import store from "./Redux/redux-store"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import  {Provider} from "./StoreContext";


 let rerenderEntireThree=()=> {
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>, document.getElementById('root'));
};
rerenderEntireThree(store.getState());
store.subscribe(()=>{
    let state = store.getState();
    rerenderEntireThree(state);
});


serviceWorker.unregister();