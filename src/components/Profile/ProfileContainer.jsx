import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserStatus, savePhoto, saveProfile, setUserProfile, updateUserStatus} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";




class ProfileContainer extends React.Component {
    refreshProfile(){
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = this.props.ownUserId;
            if(!userId){
                this.props.history.push("/login");
            }
        }
        console.log(userId);
        this.props.setUserProfile(userId);
        this.props.getUserStatus(userId);
    }
    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId != prevProps.match.params.userId){
            this.refreshProfile();
        }
    }

    render() {

        return <Profile {...this.props} profile={this.props.profile}
                        isOwner={!this.props.match.params.userId}
                        status={this.props.status} savePhoto={this.props.savePhoto}
                        updateUserStatus={this.props.updateUserStatus}/>
    }
}



let mapStateToProps = (state) => ({
    profile : state.profilePage.profile,
    status : state.profilePage.status,
    ownUserId : state.auth.id,
    isAuth : state.auth.isAuth
});


export default compose(
    connect(mapStateToProps , {setUserProfile , saveProfile, getUserStatus, updateUserStatus, savePhoto }),
    withRouter
)(ProfileContainer) ;