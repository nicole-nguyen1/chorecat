import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import ChoreCell from './ChoreCell.jsx';
import axios from 'axios';

class ChoreRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // open: false,
      // isMouseInside: false,
      // selectedRoomie: '',
      // day: ''
    }
    // this.handleChange = this.handleChange.bind(this);
    // this.handleClickOpen = this.handleClickOpen.bind(this);
    // this.handleClose = this.handleClose.bind(this);
    // this.mouseEnter = this.mouseEnter.bind(this);
    // this.mouseLeave = this.mouseLeave.bind(this);
    // this.markAsComplete = this.markAsComplete.bind(this);
  }

  // mouseEnter() {
  //   console.log('mouse entering');
  //   this.setState({ isMouseInside: true });
  // }

  // mouseLeave() {
  //   this.setState({ isMouseInside: false });
  // }

  // handleChange(event) {
  //   this.setState({ selectedRoomie: event.target.value });
  // };

  // handleClickOpen(day) {
  //   this.setState({ 
  //     open: true,
  //     dialogDay: day  
  //   });
  // };

  // handleClose() {
  //   this.setState({ open: false });
  // };

  // markAsComplete() {
  //   axios.post('/calendar', {
  //     choreId: this.props.chore.id,
  //     userId: this.state.selectedRoomie,
  //     day: this.state.dialogDay 
  //   }).then(this.handleClose());
  // }

  render() {
    return (
      <TableRow>
        <TableCell>{this.props.chore.name}</TableCell>
        {[0, 1, 2, 3, 4, 5, 6].map(dayId =>
          <ChoreCell key={dayId} day={dayId} chore={this.props.chore} users={this.props.users}/>
        )}
      </TableRow>
    )
  }

}

export default ChoreRow;