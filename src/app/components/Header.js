/* eslint jsx-quotes: ["error", "prefer-double"] */
import React from 'react'
import './Header.css'

export const Header = () => {
  return (
    <header className="masthead mb-auto">
      <div className="inner">
        <div>
          <h3 className="masthead-brand">Adrian L Flanagan</h3>
        </div>
        <nav className="nav nav-masthead justify-content-center app-nav">
          <span className="nav-link"><a href="/">Home</a></span>
          <span className="nav-link"><a href="/about_me">About Me</a></span>
          <span className="nav-link"><a href="/contact">Contact Me</a></span>
          <span className="nav-link"><a href="/blog">Blog</a></span>
          <span className="nav-link"><a href="/portfolio">Portfolio</a></span>
          <span className="nav-link"><a href="/accounts/logout">Logout</a></span>
          <span className="nav-link"><a href="/accounts/login">Login</a></span>
          <span className="nav-link"><a href="/accounts/signup">Register</a></span>
        </nav>
      </div>
    </header>
  )
}
