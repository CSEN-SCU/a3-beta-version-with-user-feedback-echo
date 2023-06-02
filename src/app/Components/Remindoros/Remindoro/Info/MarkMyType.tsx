import React from 'react'
import { isEqual } from '@lodash'
import styled from 'styled-components'

import type { Remindoro } from '@app/Store/Slices/Remindoros/'

import { useLazyStoreUpdate } from '@app/Hooks/'
import { RemindoroLevelType, updateMyType } from '@app/Store/Slices/Remindoros/'
import { MenuItem, Select } from '@mui/material'

type Props = {
  id: Remindoro['id']
  level: Remindoro['mytype']
}

const Holder = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  padding: 16px 24px;

  border-top: ${props => `thin solid ${props.theme.border}`};
`

const Row = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;

  & .first-col {
    display: flex;
    flex: 1;
  }

  & .second-col {
    display: flex;
    flex: 3;
    margin: 0 24px;
  }
`

function MarkMyType({ id, level }: Props) {
  const { value, setValue } = useLazyStoreUpdate({
    id,
    payload: level,
    updater: updateMyType,
  })

  return (
    <Holder>
      <Row>
        <div className={'first-col'}>
          <Select
            value={value}
            onChange={e => {
              setValue(currentMyType => {
                const updatedMyType = e.target.value as RemindoroLevelType
                return isEqual(currentMyType, updatedMyType)
                  ? currentMyType
                  : updatedMyType
              })
            }}
          >
            <MenuItem value={RemindoroLevelType.LEVEL1}>Level 1</MenuItem>
            <MenuItem value={RemindoroLevelType.LEVEL2}>Level 2</MenuItem>
            <MenuItem value={RemindoroLevelType.LEVEL3}>Level 3</MenuItem>
            <MenuItem value={RemindoroLevelType.LEVEL4}>Level 4</MenuItem>
            <MenuItem value={RemindoroLevelType.LEVEL5}>Level 5</MenuItem>
          </Select>
        </div>
        <div className={'second-col'}>{'Set Level'}</div>
      </Row>
    </Holder>
  )
}

export default MarkMyType
