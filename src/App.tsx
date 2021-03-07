import React, { useState } from 'react';
import { Box } from '@material-ui/core'
import './App.css';
import DateForm from './Components/DateForm';

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'

interface Props {
}

export default function App(props: Props): JSX.Element {
    // 現在時刻
    const now = new Date()
    const year = now.getFullYear()
    const month = ('00' + (now.getMonth() + 1)).slice(-2)
    const date = ('00' + now.getDate()).slice(-2)
    const currentDate = `${year}-${month}-${date}`
    const [deadLine, updateDeadLine] = useState(currentDate)
  return (
    <React.StrictMode>
      <Table>
        <TableBody>
          <TableContainer>
            <TableRow>
            <TableCell>
              <Box display="flex" alignItems="center">
                <DateForm
                label={'開催日'}
                name={'eventDate'}
                registeredValue={currentDate}
                updateValue={updateDeadLine}
                />
              </Box>
            </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <DateForm
                    label={'申込期日'}
                    name={'deadLine'}
                    registeredValue={deadLine}
                    updateValue={updateDeadLine}
                  />
                </Box>
              </TableCell>
            </TableRow>
          </TableContainer>
        </TableBody>
      </Table>


    </React.StrictMode>
  );
}
