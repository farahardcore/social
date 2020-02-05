import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";


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
       <Route path="/profile" 
       render={ () => <Profile />} />
       <Route path="/users"
              render={ () => <Users/>} />
     </div>
    </div>
  );
};




export default App;
