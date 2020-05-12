import React from "react"
import {connect} from "react-redux";

import Login from "./Login";
import {login} from "../../Redux/authReducer";

const LoginContainer  = (props)=>{

        return <Login login={props.login}/>;
};
let mapStateToProps = (state)=>({
    login : state.auth.login
});
export default connect(mapStateToProps,{login})(LoginContainer);

