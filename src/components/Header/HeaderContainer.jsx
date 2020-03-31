import React from 'react'
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUsersData} from "../../Redux/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials : true
        }).then(response => {
                if(response.data.resultCode === 0){
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUsersData( id, email, login );
                }else{
                    alert(`${response.data.messages}<3`);
                }
            });
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