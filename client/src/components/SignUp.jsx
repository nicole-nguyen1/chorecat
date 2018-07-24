import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
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
        <Button onClick={this.handleClickOpen}>Sign Up</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
          <DialogContent>
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
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSignUp} color="primary">
              Sign Up
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
