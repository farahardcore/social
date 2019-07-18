import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1 , message : "Hi" , likesCount : 12},
    {id: 2 , message : "Hello" , likesCount : 14},
    {id: 3 , message : "It's my first post!" , likesCount : 15},
    {id: 4 , message : "What do you doing?" , likesCount : 13},
    {id: 5 , message : "How much is the fish?" , likesCount : 11}
  ];
let dialogs = [
    {id: 1 , name : "Maksim"},
    {id: 2 , name : "Maks"},
    {id: 3 , name : "Masha"},
    {id: 4 , name : "Yo"},
    {id: 5 , name : "Egor"}
   ];
let messages = [
     {id: 1 , message : "Hi"},
     {id: 2 , message : "Hello"},
     {id: 3 , message : "How are you?"},
     {id: 4 , message : "What are you doing?"},
     {id: 5 , message : "How much is the fish?"}
   ];

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
