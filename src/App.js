import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = (props) => {
    console.log(props.state);
  return (
    <div className="app-wrapper">
     <Header />
     <Navbar state={props.state}
             dispatch={props.dispatch}/>
     <div className="app-wrapper-content">
       <Route  path="/dialogs" 
       render={ () => <DialogsContainer/>} />
       <Route path="/profile/:userId?"
       render={ () => <ProfileContainer/>} />
       <Route path="/users"
              render={ () => <UsersContainer/>} />
     </div>
    </div>
  );
};




export default App;
