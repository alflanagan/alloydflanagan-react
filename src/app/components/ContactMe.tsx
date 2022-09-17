import { Card, CardText, CardBody } from 'reactstrap'

import './ContactMe.less'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import { useStore } from 'react-redux'
import { RootState } from '../store'

export function ContactMe (): JSX.Element {
  const store = useStore()
  const state = store.getState() as RootState
  console.dir(state)

  const show = state.shownContact ? 'flex' : 'none'

  return (
    <Card id="contact-me" style={{ display: show }}>
      <CardBody>
        <CardText>
          <label>Email:</label>{' '}
          <a href="mailto:adrianlflanagan@acm.org">adrianlflanagan@acm.org</a>
        </CardText>
        <CardText>
          <label>Work:</label>{' '}
          <a href="mailto:lloyd.flanagan@mobelux.com">
            lloyd.flanagan@mobelux.com
          </a>
        </CardText>
      </CardBody>
      <div className="disclaimer">
        Important Note: recruitment pitches sent to my work email will be
        deleted unread, and the sender blocked.
        <br />
        Try to show a little class, please.
      </div>
    </Card>
  )
}
