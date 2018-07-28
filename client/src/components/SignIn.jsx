import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import CardActions from '@material-ui/core/CardActions';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  }
  
  handleSignIn() {
    const context = this;
    const userObj = {
      username: this.username.value,
      password: this.password.value
    }
    axios.post('api/login', userObj)
      .then( res => {
        //redirects user to app
        context.props.router.history.push("/app");
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
        <Card>
          <CardContent>
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
          </CardContent>
          <CardActions>
            <Button onClick={this.handleSignIn} color="primary">
              Sign In
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}
