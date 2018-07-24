import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';

ReactDOM.render(
  <BrowserRouter>
    {/* <div>
      <Route exact path='/' component={App} />
      <Route path='/login' component={SignIn} />
      <Route path='/signup' component={SignUp} />
    </div> */}
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);