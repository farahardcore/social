import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sitebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";
let reducers = combineReducers({
    dialogsPage :  dialogsReducer,
    profilePage: profileReducer ,
    sidebar : sidebarReducer,
    usersPage : usersReducer,
    auth : authReducer
});
let store = createStore(reducers,applyMiddleware(thunk));
window.store  = store;
export default store;