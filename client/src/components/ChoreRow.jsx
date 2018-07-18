import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import red from '@material-ui/core/colors/red';
import Icon from '@material-ui/core/Icon';

class ChoreRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      isMouseInside: false,
      selectedRoomie: '',
      day: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.markAsComplete = this.markAsComplete.bind(this);
  }

  mouseEnter() {
    this.setState({ isMouseInside: true });
  }

  mouseLeave() {
    this.setState({ isMouseInside: false });
  }

  handleChange(event) {
    this.setState({ selectedRoomie: event.target.value });
  };

  handleClickOpen() {
    this.setState({ open: true });
  };

  handleClose() {
    this.setState({ open: false });
  };

  markAsComplete() {
    console.log(this.props.chore.id);
    console.log(this.state.selectedRoomie);
    console.log(this.state.day);
    // axios.post('/calendar', {
    //   choreId: this.props.chore.id,
    //   userId: this.state.selectedRoomie,
    //   day: this.state.day 
    // })
  }

  render() {
    return (
      <TableRow>
        <TableCell>{this.props.chore.name}</TableCell>
        {[0, 1, 2, 3, 4, 5, 6].map(day => {
          this.setState({day: day});
          return <TableCell key={day} day={day}>
            {/* <div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
              {this.state.isMouseInside ? <Icon onClick={this.handleClickOpen}>add_circle</Icon> : null} */}
            <div>
              <Icon onClick={this.handleClickOpen}>add_circle</Icon>
              <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                open={this.state.open}
                onClose={this.handleClose}
              >
                <DialogTitle>Who completed this chore?</DialogTitle>
                <DialogContent>
                  <form>
                    <FormControl>
                      <InputLabel>Roomie</InputLabel>
                      <Select
                        value={this.state.selectedRoomie}
                        onChange={this.handleChange}
                        input={<Input id="user" />}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {this.props.users.map(user => <MenuItem key={user.id} value={user.id}>{user.name}</MenuItem>)}
                      </Select>
                    </FormControl>
                  </form>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose} color="primary">
                    Cancel
              </Button>
                  <Button onClick={this.markAsComplete} color="primary">
                    YAS I DID IT
              </Button>
                </DialogActions>
              </Dialog>
            </div>
          </TableCell>
        }
        )}
      </TableRow>
    )
  }

}

export default ChoreRow;