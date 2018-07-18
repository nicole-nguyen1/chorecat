import React from 'react';
import { render } from 'react-dom';
import Calendar from './components/Calendar.jsx';
import ChoreInput from './components/ChoreInput.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chores: []
    }
    this.fetchAllChores = this.fetchAllChores.bind(this);
  }

  componentDidMount() {
    this.fetchAllChores();
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
        <ChoreInput fetchAllChores={this.fetchAllChores}/>
        <Calendar chores={this.state.chores}/>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));