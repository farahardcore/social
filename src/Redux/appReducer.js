
import {getAuthUsersData} from "./authReducer";

const SET_INITIALIZED = "SET_INITIALIZED";

let initialState ={
    initialized : false
};
const  appReducer = (state = initialState ,action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            };
        default :
            return state;
    }
};
export default  appReducer;
const initializedSuccess = () => ({type : SET_INITIALIZED });
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUsersData);
    Promise.all([promise]).then(
        (response)=>{
            console.log(response);
            dispatch(initializedSuccess());
        }
    )
};
