import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Theme } from '@app/Util/colors'

export interface SettingsState {
  theme: Theme
  liveNoteEnabled: boolean
  notificationsEnabled: boolean
  focusEnabled: boolean
}

const initialState: SettingsState = {
  theme: Theme.Day,
  liveNoteEnabled: false,
  notificationsEnabled: true,
  focusEnabled: false,
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<{ id: string; value: Theme }>) => {
      const { value: selectedTheme } = action.payload
      // update theme
      state.theme = selectedTheme
    },

    // enables new experimental live note
    setLiveNoteStatus: (
      state,
      action: PayloadAction<{ id: string; value: boolean }>
    ) => {
      // dummy id passed to match the api of 'lazy store update'
      const { value } = action.payload
      state.liveNoteEnabled = value
      state.liveNoteEnabled = false
    },

    // enables/disables notification
    setNotificationsStatus: (
      state,
      action: PayloadAction<{ id: string; value: boolean }>
    ) => {
      // dummy id passed to match the api of 'lazy store update'
      const { value } = action.payload
      state.notificationsEnabled = value
    },

    setFocusStatus: (
      state,
      action: PayloadAction<{ id: string; value: boolean }>
    ) => {
      // dummy id passed to match the api of 'lazy store update'
      const { value } = action.payload
      state.focusEnabled = value
    },
  },
})

// export actions
export const {
  setTheme,
  setLiveNoteStatus,
  setNotificationsStatus,
  setFocusStatus,
} = settingsSlice.actions

export default settingsSlice.reducer
