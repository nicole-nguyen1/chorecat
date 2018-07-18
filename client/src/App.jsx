import React from 'react';
import { render } from 'react-dom';
import Calendar from './components/Calendar.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <p>This is the App component</p>
        <Calendar />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));