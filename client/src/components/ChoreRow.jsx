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

class ChoreRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selectedRoomie: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleChange(event) {
    //this.setState({ selectedRoomie: event.target.value });
  };

  handleClickOpen() {
    this.setState({ open: true });
  };
  
  handleClose() {
    this.setState({ open: false });
  };

  render() {
    return (
      <TableRow>
      <TableCell>{this.props.chore.name}</TableCell>
      {[0, 1, 2, 3, 4, 5, 6].map(day =>
        <TableCell key={day} day={day}>
          <div>
            <Button onClick={this.handleClickOpen}>Mark as complete</Button>
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
                      onChange={this.handleChange()}
                      input={<Input id="user" />}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {this.props.users.map(user => <MenuItem key={user.id} value={user.name}>{user.name}</MenuItem>)}
                    </Select>
                  </FormControl>
                </form>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Cancel
              </Button>
                <Button onClick={this.handleClose} color="primary">
                  Ok
              </Button>
              </DialogActions>
            </Dialog>
          </div>
        </TableCell>
      )}
    </TableRow>
    )
  }
  
}

export default ChoreRow;