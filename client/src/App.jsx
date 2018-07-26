import React from 'react';
import { render } from 'react-dom';
import Calendar from './components/Calendar.jsx';
import ChoreInput from './components/ChoreInput.jsx';
import UserInput from './components/UserInput.jsx';
import axios from 'axios';
import PieChart from './components/Charts.jsx';
import * as d3 from 'd3';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chores: [],
      users: [],
      completedChores: [
                        {user: 'Jeff', chore: 'Sweeping', day: 2},
                        {user: 'Nicole', chore: 'Sweeping', day: 4},
                        {user: 'Nicole', chore: 'Sweeping', day: 5},
                        {user: 'Mason', chore: 'Sweeping', day: 5},
                        {user: 'Jeff', chore: 'Sweeping', day: 1},
                        {user: 'Logan', chore: 'Sweeping', day: 4},
                        {user: 'Logan', chore: 'Sweeping', day: 6},
                        {user: 'Mason', chore: 'Sweeping', day: 3},
                        {user: 'Logan', chore: 'Sweeping', day: 6},
                        {user: 'Nicole', chore: 'Sweeping', day: 2}
                      ],
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
    this.formatChoresPerUser();
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

  fetchAllCompletedChores() {
    axios.get('/completedChores')
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
        <Calendar chores={this.state.chores} users={this.state.users} />
        <PieChart x={200} y={200} outerRadius={150} innerRadius={50} cornerRadius={5}
          data={this.state.choresPerUser} />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));
