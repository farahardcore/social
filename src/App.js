import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Redirect, Route, Switch} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import {initializeApp} from "./Redux/appReducer";
import Preloader from "./components/preloader/preloader";
import {withSuspense} from "./hoc/withSuspense";


const DialogsContainer = React.lazy(()=> import(`./components/Dialogs/DialogsContainer`));
class App extends React.Component {
    catchAllUnhandledError(promiseRejectionEvent){
        alert("some error catch");
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledError);
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledError);
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar state={this.props.state}
                        dispatch={this.props.dispatch}/>

                <div className="app-wrapper-content">
                    <Switch>
                    <Route exact path="/"
                               render={() => <Redirect to={"/profile"}/>}/>
                    <Route path="/dialogs"
                           render={withSuspense(DialogsContainer) }/>
                    <Route path="/profile/:userId?"
                           render={() => <ProfileContainer/>}/>
                    <Route path="/users"
                           render={() => <UsersContainer/>}/>
                    <Route path="/login"
                           render={() => <LoginContainer/>}/>
                    <Route path="*"
                           render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>

                </div>

            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    initialized : state.app.initialized
});

export default connect(mapStateToProps , {initializeApp })(App);
