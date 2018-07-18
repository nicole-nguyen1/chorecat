import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const ChoreRow = props => (
    <TableRow>
      <TableCell>{props.chore.name}</TableCell>
      <TableCell>Jeff did it today</TableCell>
      <TableCell></TableCell>
      <TableCell>Logan did it</TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell>Nicole did it</TableCell>
    </TableRow>
)

export default ChoreRow;