
import {getAuthUsersData} from "./authReducer";

const SET_INITIALIZED = "SET_INITIALIZED";
export type InitialStateType=  {
    initialized : boolean
}
let initialState: InitialStateType ={
    initialized :false
};
const  appReducer = (state: InitialStateType = initialState ,action:any):InitialStateType => {
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
type InitializedSuccesActionType = {
    type : typeof SET_INITIALIZED
}
const initializedSuccess = () : InitializedSuccesActionType=> ({type : SET_INITIALIZED });
export const initializeApp = () => (dispatch:any) => {
    let promise = dispatch(getAuthUsersData());
    Promise.all([promise]).then( ()=>{
            dispatch(initializedSuccess());
    });
};
