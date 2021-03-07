import React, { useState } from 'react'
import { Box, TextField } from '@material-ui/core'
// molecules

interface Props {
    label: string
    name: string
    registeredValue: string
    updateValue: any
  }


export default function DateForm(props: Props): JSX.Element {

  const [dateAt, setDateAt] = useState(props.registeredValue)

  // 現在時刻
  const now = new Date()
  const year = now.getFullYear()
  const month = ('00' + (now.getMonth() + 1)).slice(-2)
  const date = ('00' + now.getDate()).slice(-2)
  const currentDate = `${year}-${month}-${date}`

    function handleChange(value) {
      setDateAt(value)
    }

    return (
      <React.StrictMode>
        <Box mr={11} style={{ position: 'relative', width: '120px' }}>
          <TextField
            name={props.name}
            label={`${props.label}`}
            type="date"
            value={dateAt}
            variant="outlined"
            onChange={(e) => handleChange(e.target.value)}
          />
        </Box>
      </React.StrictMode>
    )
  }
