import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import type { RootState } from '@app/Store/'
import { setFocusStatus } from '@app/Store/Slices/Settings'
import { useLazyStoreUpdate } from '@app/Hooks/'
import Switch from '@app/Components/Switch'

export const Holder = styled.div`
  padding: 16px;
  border-bottom: ${props => `thin solid ${props.theme.border}`};

  & .setting-wrapper {
    display: flex;
    align-items: center;
    padding: 16px 0;

    & .heading {
      flex: 1;
      font-size: 1.25rem;
    }

    & .setting {
      flex: 1;
    }
  }

  & .subtitle {
    color: ${props => props.theme.highlight};
    font-size: 0.95rem;
    font-style: italic;
  }
`
function Focus() {
  const isFocusEnabled = useSelector(
    (state: RootState) => state.settings.focusEnabled
  )

  const { value: isEnabled, setValue } = useLazyStoreUpdate<boolean>({
    id: 'dummy-id',
    payload: isFocusEnabled,
    updater: setFocusStatus,
  })

  return (
    <Holder>
      <div className={'setting-wrapper'}>
        <div className={'heading'}>{'Blacklists'}</div>
        <div className={'setting'}>
          <Switch
            onText={'On'}
            offText={'Off'}
            checked={isEnabled}
            setChecked={status => {
              setValue(status)
            }}
          />
        </div>
      </div>
      <div className={'subtitle'}>{'Enable/Resume'}</div>
    </Holder>
  )
}

export default Focus
