import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import axios from 'axios';

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: 20,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class ButtonAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  handleSignOut(e) {
    axios.get('/api/logout')
      .then((res) => {
        this.setState({
          open: true
        });
        this.props.onLogoutClick(e);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const { classes } = this.props;
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              <Link to="/app">
                Chore Cat
            </Link>
            </Typography>
            {this.props.isLoggedIn ? (
              <Link to="/logout">
                <Button color="inherit" onClick={(e) => {this.handleSignOut(e)}}>Sign Out</Button>
                <Snackbar
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  open={this.state.open}
                  autoHideDuration={6000}
                  onClose={this.handleClose}
                  ContentProps={{
                    'aria-describedby': 'message-id',
                  }}
                  message={<span id="message-id">Successfully signed out!</span>}
                  action={[
                    <IconButton
                      key="close"
                      aria-label="Close"
                      color="inherit"
                      className={classes.close}
                      onClick={this.handleClose}
                    >
                      <CloseIcon />
                    </IconButton>,
                  ]}
                />
              </Link>
            ) : (
              <div>
                <Link to="/login">
                  <Button color="inherit">Sign In</Button>
                </Link>
                <Link to="/register">
                  <Button color="inherit">Sign Up</Button>
                </Link>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(ButtonAppBar);