import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import App from './components/App.jsx';
import ButtonAppBar from './components/ButtonAppBar.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';


class Index extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <ButtonAppBar />
          <Switch>
            <Route path="/login" render={props => (
              <SignIn router={props} />
            )} />
            <Route path="/register" render={props => (
              <SignUp router={props} />
            )} />
            <Route path="/logout" render={props => (
              <SignIn />
            )} />
            <Route path="/app" render={props => (
              <App />
            )} />
          </Switch>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('app'));