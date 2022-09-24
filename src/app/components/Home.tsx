import { Card, CardText, CardBody } from 'reactstrap'

import './ContactMe.less'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import { useStore } from 'react-redux'
import { RootState } from '../store'
import { TabTypes } from './Tabs'

export function Home (): JSX.Element | null {
  const store = useStore()
  const state = store.getState() as RootState

  const tab = state.showing

  if (state.showing === TabTypes.Home) {
    return (
      <Card id="home-tab">
        <CardBody>
          <CardText>Home Page</CardText>
        </CardBody>
      </Card>
    )
  } else {
    return null
  }
}
