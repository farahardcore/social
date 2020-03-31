import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/AuthRedirect";




class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
        this.props.setUserProfile(userId);
    }

    render() {

        return <Profile {...this.props} profile={this.props.profile} />
    }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer);

let mapStateToProps = (state) => ({
    profile : state.profilePage.profile
});
export default connect(mapStateToProps , {setUserProfile})(withUrlDataContainerComponent) ;