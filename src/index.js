/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/


import React from "react";
import ReactDOM from "react-dom";
import App from "./App"

ReactDOM.render(<App />, document.getElementById("root"));

/*
import React from "react"
import ReactDOM from "react-dom"

// #1
//function App() {
//    return (
//        <div>
//            <Header username="Raghav Agarwal" />
//            <Greeting />
//        </div>
//    )
//};
class App extends React.Component {
  render() {
    return (
      <div>
          <Header username="Raghav Agarwal" />
          <Greeting />
      </div>
  )
  }
}

// #2
//function Header(props) {
//    return (
//        <header>
//            <p>Welcome, {props.username}!</p>
//        </header>
//    )
//};
class Header extends React.Component{
  render(props) {
    return (
      <header>
          <p>Welcome, {this.props.username}!</p>
      </header>
  );
  }
}

// #3
//function Greeting() {
//    const date = new Date()
//    const hours = date.getHours()
//    let timeOfDay
//    
//    if (hours < 12) {
//        timeOfDay = "morning"
//    } else if (hours >= 12 && hours < 17) {
//        timeOfDay = "afternoon"
//    } else {
//        timeOfDay = "night"
//    }
//    return (
//        <h1>Good {timeOfDay} to you, sir or madam!</h1>
//    )
//};
class Greeting extends React.Component{
  render() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    
    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }
    return (
        <h1>Good {timeOfDay} to you, sir or madam!</h1>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
*/