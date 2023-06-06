import React from 'react'
import { useSelector } from 'react-redux'

import type { RootState } from '@app/Store/'

import { setLiveNoteStatus } from '@app/Store/Slices/Settings'
import { useLazyStoreUpdate } from '@app/Hooks/'
import { Holder } from './'
import Switch from '@app/Components/Switch'

function Notifications() {
  const isLiveNoteEnabled = useSelector(
    (state: RootState) => state.settings.liveNoteEnabled
  )

  const { value: isEnabled, setValue } = useLazyStoreUpdate<boolean>({
    id: 'dummy-id',
    payload: isLiveNoteEnabled,
    updater: setLiveNoteStatus,
  })

  return (
    <Holder>
      <div className={'setting-wrapper'}>
        <div className={'heading'}>{'Text Editing'}</div>
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
    </Holder>
  )
}

export default Notifications
