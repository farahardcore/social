import React from 'react'
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profileReducer";
import withRouter from "react-router-dom/es/withRouter";



class ProfileContainer extends React.Component {
    componentDidMount() {
        debugger;
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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