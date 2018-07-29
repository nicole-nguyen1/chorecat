import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import ChoreCell from './ChoreCell.jsx';

const ChoreRow = (props) => (
  <TableRow>
    <TableCell>{props.chore["chore_name"]}</TableCell>
    {[0, 1, 2, 3, 4, 5, 6].map(dayId => {
      let completedBy = '';
      props.completedBy.forEach( tuple => {
        if (Number(tuple[1]) === dayId) {
          completedBy = tuple[0];
        }
      });
      return <ChoreCell key={dayId} day={dayId} chore={props.chore} users={props.users} completedBy={completedBy} fetchComplete={props.fetchAllComplete}/>
    }
    )}
  </TableRow>
)

export default ChoreRow;