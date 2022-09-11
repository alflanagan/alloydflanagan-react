// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from 'react'

import './Menu.css'

interface MenuProps {
  className?: string
}

export const Menu = (props: MenuProps): JSX.Element => {
  const cssClass = props.className ?? ''
  return (
    <nav
      className={`${cssClass} nav nav-masthead justify-content-center app-nav`}
    >
      <span className="nav-link">
        <a href="#about_me">About Me</a>
      </span>
      <span className="nav-link">
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
