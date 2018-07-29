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
      completedChores: [],
      choresPerUser: []
    }
    this.fetchAllChores = this.fetchAllChores.bind(this);
    this.fetchAllUsers = this.fetchAllUsers.bind(this);
    this.fetchAllCompletedChores = this.fetchAllCompletedChores.bind(this);
    this.formatChoresPerUser = this.formatChoresPerUser.bind(this);
  }

  componentDidMount() {
    this.fetchAllChores();
    this.fetchAllUsers();
    this.fetchAllCompletedChores();
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
          this.formatChoresPerUser();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  formatChoresPerUser() {
    let chartData = {};
    let choresPerUser = [];
    this.state.completedChores.forEach((chore)=>{
      let user = chore.name
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
        <UserInput fetchAllUsers={this.fetchAllUsers}/>
        <ChoreInput fetchAllChores={this.fetchAllChores}/>
        <PieChart x={200} y={200} outerRadius={175} innerRadius={75} cornerRadius={5}
          data={this.state.choresPerUser} />
        <Calendar chores={this.state.chores} users={this.state.users} completedChores={this.state.completedChores} fetchAllChores={this.fetchAllCompletedChores} />
      </div>
    )
  }
}

export default App;
