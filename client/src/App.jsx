import React from 'react';
import { render } from 'react-dom';
import Calendar from './components/Calendar.jsx';
import ChoreInput from './components/ChoreInput.jsx';
import UserInput from './components/UserInput.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chores: [],
      users: []
    }
    this.fetchAllChores = this.fetchAllChores.bind(this);
    this.fetchAllUsers = this.fetchAllUsers.bind(this);
  }

  componentDidMount() {
    this.fetchAllChores();
  }

  fetchAllUsers() {

  }

  fetchAllChores() {
    axios.get('/chores')
      .then((res) => {
        this.setState({
          chores: res.data
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <p>This is the App component</p>
        <UserInput fetchAllUsers={this.fetchAllUsers}/>
        <ChoreInput fetchAllChores={this.fetchAllChores}/>
        <Calendar chores={this.state.chores} users={this.state.users} />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));