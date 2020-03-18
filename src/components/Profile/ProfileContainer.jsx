import React from 'react'
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profileReducer";
import withRouter from "react-router-dom/es/withRouter";



class ProfileContainer extends React.Component {
    componentDidMount() {
        debugger;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response=> {
                console.log(response);
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}
let withUrlDataContainerComponent = withRouter(ProfileContainer);
let mapStateToProps = (state) => ({ profile : state.profilePage.profile});
export default connect(mapStateToProps , {setUserProfile})(withUrlDataContainerComponent) ;