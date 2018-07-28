import React from 'react';
import Calendar from './Calendar.jsx';
import ChoreInput from './ChoreInput.jsx';
import UserInput from './UserInput.jsx';
import axios from 'axios';
import PieChart from './Charts.jsx';
import * as d3 from 'd3';

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
    this.fetchAllCompletedChores = this.fetchAllCompletedChores.bind(this);
    this.formatChoresPerUser = this.formatChoresPerUser.bind(this);
  }

  componentDidMount() {
    this.fetchAllChores();
    this.fetchAllUsers();
    this.formatChoresPerUser();
  }

  fetchAllUsers() {
    axios.get('/api/users')
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
    axios.get('/api/chores')
      .then((res) => {
        this.setState({
          chores: res.data
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  fetchAllCompletedChores() {
    axios.get('/api/calendar')
      .then((res) => {
        this.setState({
          completedChores: res.data
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  formatChoresPerUser() {
    let chartData = {};
    let choresPerUser = [];
    this.state.completedChores.forEach((chore)=>{
      let user = chore.user
      if(chartData[user]) {
        chartData[user]++
      } else {
        chartData[user] = 1
      }
    });
    for (var i in chartData){
      choresPerUser.push({value: chartData[i], label: i})
    }
    this.setState({
      choresPerUser: choresPerUser
    })
  }

  render() {
    return (
      <div>
        <p>This is the App component</p>
        <UserInput fetchAllUsers={this.fetchAllUsers}/>
        <ChoreInput fetchAllChores={this.fetchAllChores}/>
        {/* <PieChart x={200} y={200} outerRadius={150} innerRadius={50} cornerRadius={5}
          data={this.state.choresPerUser} /> */}
        <Calendar chores={this.state.chores} users={this.state.users} completedChores={this.state.completedChores} />
      </div>
    )
  }
}

export default App;
