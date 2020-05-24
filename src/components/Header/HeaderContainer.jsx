import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../Redux/authReducer";
import {loginAPI} from "../../DAL/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        if(this.props.isAuth){
            alert("you are authorised");
        }else{
            console.log("НЕ ВИДИТ ЧТО АВТОРИЗОВАН");
        }
    }

    render() {

        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state) => ({
    isAuth : state.auth.isAuth,
    login : state.auth.login

});
export default connect(mapStateToProps , {logout })(HeaderContainer);