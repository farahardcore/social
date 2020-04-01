import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserStatus, setUserProfile, updateUserStatus} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";




class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 5945;
        }
        this.props.setUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {

        return <Profile {...this.props} profile={this.props.profile}
                        status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
    }
}



let mapStateToProps = (state) => ({
    profile : state.profilePage.profile,
    status : state.profilePage.status
});


export default compose(
    connect(mapStateToProps , {setUserProfile , getUserStatus, updateUserStatus }),
    withRouter
)(ProfileContainer) ;