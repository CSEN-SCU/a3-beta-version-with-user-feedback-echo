import React from 'react'
import styled from 'styled-components'

import Toolbar from './Toolbar'

type Props = {
  liveNoteEnabled: boolean
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  & .live-note-switch {
    margin-left: auto;
  }
`

function ActionBar({ liveNoteEnabled }: Props) {
  return (
    <Wrapper>
      <div>{liveNoteEnabled && <Toolbar />}</div>
    </Wrapper>
  )
}

export default ActionBar
