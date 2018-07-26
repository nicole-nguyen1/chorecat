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
      users: [],
      completedChores: [
        {user: 'Jeff', chore: 'Sweeping', day: 1},
        {user: 'Jeff', chore: 'Sweeping', day: 2},
        {user: 'Jeff', chore: 'Take out the trash', day: 0},
        {user: 'Mason', chore: 'Take out the trash', day: 3},
        {user: 'Mason', chore: 'Sweeping', day: 3},
        {user: 'Nicole', chore: 'Sweeping', day: 4},
        {user: 'Jeff', chore: 'Take out the trash', day: 5},
        {user: 'Mason', chore: 'Sweeping', day: 5},
        {user: 'Logan', chore: 'Sweeping', day: 6}
      ]
    }
    this.fetchAllChores = this.fetchAllChores.bind(this);
    this.fetchAllUsers = this.fetchAllUsers.bind(this);
  }

  componentDidMount() {
    this.fetchAllChores();
    this.fetchAllUsers();
  }

  fetchAllUsers() {
    axios.get('/users')
      .then((res) => {
        this.setState({
          users: res.data
        });
      })
      .catch((err) => {
        console.error(err);
      })
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
        <Calendar chores={this.state.chores} users={this.state.users} completedChores={this.state.completedChores} />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));