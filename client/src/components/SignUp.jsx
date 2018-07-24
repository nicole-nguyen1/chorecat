import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }
  
  handleSignUp() {
    const context = this;
    const userObj = {
      name: this.username.value,
      pw: this.password.value
    }
    axios.post('/users', userObj)
      .then( res => {
        context.handleClose();
      })
      .catch( err => {
        console.error(err);
      })
  }

  handleClickOpen() {
    this.setState({ open: true });
  };

  handleClose() {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <TextField
          autoFocus
          margin="dense"
          id="username"
          label="Enter username:"
          type="text"
          fullWidth
          inputRef={(elm) => {
            this.username = elm;
          }}
        />
        <TextField
          margin="dense"
          id="password"
          label="Enter password:"
          type="password"
          fullWidth
          inputRef={(elm) => {
            this.password = elm;
          }}
        />
        <Button onClick={this.handleSignUp} color="primary">
          Sign Up
        </Button>
      </div>
    );
  }
}
