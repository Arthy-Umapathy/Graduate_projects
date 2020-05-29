import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from "./Components/App2"
import Loading from "./Components/Loading"
import No_of_msgs from "./Components/No_of_msgs"
import Login from "./Components/Login"
import APIcall from "./Components/APIcall"
import Form1 from "./Components/Form1"
import * as serviceWorker from './serviceWorker';
import FormPractice from './Components/FormPractice';

ReactDOM.render(
  <React.StrictMode>
    <FormPractice />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
