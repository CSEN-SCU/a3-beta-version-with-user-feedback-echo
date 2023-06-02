import React from 'react'
import { isEqual } from '@lodash'
import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

import { RemindoroLevelType, updateMyUrl } from '@app/Store/Slices/Remindoros'
import { useLazyStoreUpdate } from '@app/Hooks/'

type Props = {
  id: string
  myurl: string
}

const StyledTextField: typeof TextField = styled(TextField)(({ theme }) => ({
  '& .MuiFilledInput-root': {
    '&:hover:not(.Mui-disabled)::before': {
      borderBottom: `thin solid ${theme.palette.primary.main}`,
    },
    background: `${theme.palette.background.paper}`,
  },
}))

function MyUrl({ id, myurl }: Props) {
  const { value, setValue } = useLazyStoreUpdate<string>({
    id,
    payload: myurl || RemindoroLevelType.LEVEL1,
    updater: updateMyUrl,
  })

  return (
    <StyledTextField
      variant={'filled'}
      // focused
      color={'primary'}
      fullWidth
      type="text"
      placeholder={'Add My Url here'}
      value={value}
      onChange={e => {
        setValue(currentTitle => {
          const updatedTitle = e.target.value
          return isEqual(currentTitle, updatedTitle)
            ? currentTitle
            : updatedTitle
        })
      }}
    />
  )
}

export default MyUrl
