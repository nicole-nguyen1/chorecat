import React from 'react';
import ChoreRow from './ChoreRow.jsx';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedChores: []
    }
  }

  componentDidMount() {
    this.setState({
      sortedChores: this.sortChores(this.props.completedChores)
    });
  }

  sortChores(chores) {
    let sortedChores = [];
    chores.forEach( chore => {
      //for each completed chore, loop through already sorted chores
      let exists = false;
      sortedChores.forEach( sorted => {
        //check to see if sorted chore already exists
        //if so, add tuple to sorted chore and set exists to true
        if (sorted.name === chore.chore) {
          sorted.completedBy.push([chore.user, chore.day]);
          exists = true;
        }
      });
      //if !exists, push new sorted chore to sortedChores with tuple
      if (!exists) {
        sortedChores.push({name: chore.chore, completedBy: [[chore.user, chore.day]]});
      }
    });
    return sortedChores;
  }

  render() {
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Chore</TableCell>
              <TableCell>Sunday</TableCell>
              <TableCell>Monday</TableCell>
              <TableCell>Tuesday</TableCell>
              <TableCell>Wednesday</TableCell>
              <TableCell>Thursday</TableCell>
              <TableCell>Friday</TableCell>
              <TableCell>Saturday</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.chores.map(chore => {
              let completedBy = [];
              this.state.sortedChores.forEach( sortedChore => {
                if (sortedChore.name === chore.name) {
                  completedBy = sortedChore.completedBy;
                }
              });
              return <ChoreRow key={chore.id} chore={chore} users={this.props.users} completedBy={completedBy} />
            })}
          </TableBody>
        </Table>
      </div>
    )
  }
}

export default Calendar;
