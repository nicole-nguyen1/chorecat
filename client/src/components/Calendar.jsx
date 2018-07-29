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
              this.props.completedChores.forEach(completed => {
                if (completed["chore_name"] === chore["chore_name"]) {
                  completedBy.push([completed["user_name"], completed.day]);
                }
              });
              return <ChoreRow key={chore.id} chore={chore} users={this.props.users} completedBy={completedBy} fetchAllComplete={this.props.fetchAllCompletedChores}/>
            })}
          </TableBody>
        </Table>
      </div>
    )
  }
}

export default Calendar;