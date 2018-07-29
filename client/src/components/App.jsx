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
      choresPerUser: [],
      ChoresByQuantity: []
    }
    this.fetchAllChores = this.fetchAllChores.bind(this);
    this.fetchAllUsers = this.fetchAllUsers.bind(this);
    this.fetchAllCompletedChores = this.fetchAllCompletedChores.bind(this);
    this.formatChoresPerUser = this.formatChoresPerUser.bind(this);
    this.formatChoresByQuantity = this.formatChoresByQuantity.bind(this);
  }

  componentDidMount() {
    this.fetchAllChores();
    this.fetchAllUsers();
    this.fetchAllCompletedChores();
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
          this.formatChoresPerUser();
          this.formatChoresByQuantity();
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

  formatChoresByQuantity() {
    let chartData = {};
    let ChoresByQuantity = [];
    this.state.completedChores.forEach((chore)=>{
      let choreName = chore.chore
      if(chartData[choreName]) {
        chartData[choreName]++
      } else {
        chartData[choreName] = 1
      }
    });
    for (var i in chartData){
      ChoresByQuantity.push({value: chartData[i], label: i})
    }
    this.setState({
      ChoresByQuantity: ChoresByQuantity
    })
  }

  render() {
    return (
      <div>
        <UserInput fetchAllUsers={this.fetchAllUsers}/>
        <ChoreInput fetchAllChores={this.fetchAllChores}/>
        <PieChart x={220} y={220} outerRadius={175} innerRadius={75} cornerRadius={5}
          data={this.state.choresPerUser} typeText={"chore"} />
        <PieChart x={220} y={220} outerRadius={175} innerRadius={75} cornerRadius={5}
          data={this.state.ChoresByQuantity} typeText={"time"} />
        <Calendar chores={this.state.chores} users={this.state.users} completedChores={this.state.completedChores} fetchAllChores={this.fetchAllCompletedChores} />
      </div>
    )
  }
}

export default App;
