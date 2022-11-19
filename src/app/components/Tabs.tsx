// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from 'react'
import { showTab } from '../actions'

import { store } from '../store'

import './Tabs.css'

export enum TabTypes {
  Home,
  About,
  Contact,
  Portfolio,
  Blog,
}

export interface TabsProps {
  className?: string
  default: TabTypes
}

export interface TabsState {
  showing: TabTypes
}

function setTab (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void {
  // why is this necessary?
  const target = event.target as HTMLAnchorElement
  switch (target.id) {
    case 'about':
      showTab(TabTypes.About)
      break
    case 'contact':
      showTab(TabTypes.Contact)
      break
    default:
      showTab(TabTypes.Home)
  }
}

export const Tabs = (props: TabsProps): JSX.Element => {
  const cssClass = props.className ?? ''
  const tab = store.getState().showing

  return (
    <nav
      className={`${cssClass} nav nav-masthead justify-content-center app-nav`}
    >
      <span className="nav-link">
        <a href="#" onClick={setTab} id="about">
          About Me
        </a>
      </span>
      <span
        className={`nav-link ${tab === TabTypes.Contact ? 'active' : ''}`}
        aria-current="true"
      >
        <a href="#contact">Contact Me</a>
      </span>
      <span className="nav-link">
        <a href="#blog">Blog</a>
      </span>
      <span className="nav-link">
        <a href="#portfolio">Portfolio</a>
      </span>
      {/* }
          <span className="nav-link"><a href="/accounts/logout">Logout</a></span>
          <span className="nav-link"><a href="/accounts/login">Login</a></span>
          <span className="nav-link"><a href="/accounts/signup">Register</a></span>
  { */}
    </nav>
  )
}
