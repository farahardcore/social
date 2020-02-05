import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sitebarReducer";
let reducers = combineReducers({
    dialogsPage :  dialogsReducer,
    profilePage: profileReducer ,
    sidebar : sidebarReducer
});
let store = createStore(reducers);
window.store  = store;
export default store;