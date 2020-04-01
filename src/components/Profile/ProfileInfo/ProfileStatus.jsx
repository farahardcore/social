import React from 'react'


class ProfileStatus extends React.Component {
    state={
        editMode : false,
        status: this.props.status
    };
    activatingEditMode=()=>{
      this.setState({editMode : true})
    };
    deactivatingEditMode=()=>{
        this.setState({editMode : false});
        this.props.updateUserStatus(this.state.status);
    };
    onStatusChange=(e)=>{
        this.setState({
            status : e.currentTarget.value
        })

    };
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({status : this.props.status})
        }
    }

    render() {

        return (
            <div>
                {this.state.editMode
                    ?<div>
                        <input onChange={this.onStatusChange} autoFocus={true}
                               onBlur={this.deactivatingEditMode} value={this.state.status}/>
                    </div>
                    :<div>
                        <span onDoubleClick={this.activatingEditMode}>{this.props.status || `----`}  </span>
                    </div>}
            </div>


        )
    }
}

export default ProfileStatus;