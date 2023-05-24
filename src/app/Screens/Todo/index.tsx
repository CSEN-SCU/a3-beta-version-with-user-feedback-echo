import React from 'react'
import styled from 'styled-components'
import { orderBy } from '@lodash'

import { useTodoRemindoros } from '@app/Store/Slices/Remindoros'
import Remindoros from '@app/Components/Remindoros/'
import InfoBanner from '@app/Components/InfoBanner'

const Wrapper = styled.div`
  padding: 20px;
`

function Todo() {
  // sort remindoros
  const sortedRemindoros = orderBy(useTodoRemindoros(), 'updated', 'desc')

  return (
    <div>
      {sortedRemindoros.length === 0 ? (
        <Wrapper>
          <InfoBanner>{'No note marked as todo.'}</InfoBanner>
        </Wrapper>
      ) : (
        <Remindoros remindoros={sortedRemindoros} />
      )}
    </div>
  )
}

export default Todo
