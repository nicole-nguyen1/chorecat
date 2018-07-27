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
            <Route path="/login" render={() => (
              <SignIn />
            )} />
            <Route path="/register" render={() => (
              <SignUp />
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