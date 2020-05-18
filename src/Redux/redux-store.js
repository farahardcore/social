import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sitebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./appReducer";
let reducers = combineReducers({
    dialogsPage :  dialogsReducer,
    profilePage: profileReducer ,
    sidebar : sidebarReducer,
    usersPage : usersReducer,
    auth : authReducer,
    app : appReducer,
    form : formReducer

});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)));
window.__store__  = store;
export default store;