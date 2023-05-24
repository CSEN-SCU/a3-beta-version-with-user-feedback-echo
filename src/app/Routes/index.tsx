import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import Home from '@app/Screens/Home/'
import Todo from '@app/Screens/Todo/'
import Scheduled from '@app/Screens/Scheduled/'
import RemindoroInfo from '@app/Screens/RemindoroInfo/'
import Settings from '@app/Screens/Settings/'
import Focus from '@app/Screens/Focus/'

import { Screens } from '@app/Util/Enums'

export { Screens }

const PATHS = [
  {
    path: Screens.Home,
    Screen: Home,
  },
  {
    path: Screens.Todo,
    Screen: Todo,
  },
  {
    path: Screens.Scheduled,
    Screen: Scheduled,
  },
  {
    path: Screens.RemindoroInfo,
    Screen: RemindoroInfo,
  },
  {
    path: Screens.Settings,
    Screen: Settings,
  },
  {
    path: Screens.Focus,
    Screen: Focus,
  },
]

const Holder = styled.div`
  width: 100%;
  /* padding: 0 12px; */
`

function Routes() {
  return (
    <Holder>
      <Switch>
        {PATHS.map(({ path, Screen }) => (
          <Route exact key={path} path={path}>
            <Screen />
          </Route>
        ))}
      </Switch>
    </Holder>
  )
}

export default Routes
