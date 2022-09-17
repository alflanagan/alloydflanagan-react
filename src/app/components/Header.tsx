// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from 'react'
import './Header.css'
import { Tabs, TabTypes } from './Tabs'

export const Header = (): JSX.Element => {
  return (
    <header className="masthead mb-auto">
      <div className="inner">
        <div>
          <h3 className="masthead-brand">A Lloyd Flanagan</h3>
        </div>
        <Tabs default={TabTypes.Home} />
      </div>
    </header>
  )
}
