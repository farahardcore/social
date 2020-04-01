import React from 'react'
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUsersData} from "../../Redux/authReducer";
import {headerAPI} from "../../DAL/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.setAuthUsersData();
    }

    render() {
        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state) => ({
    isAuth : state.auth.isAuth,
    login : state.auth.login
});
export default connect(mapStateToProps , {setAuthUsersData})(HeaderContainer);