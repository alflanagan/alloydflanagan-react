/* eslint jsx-quotes: ["error", "prefer-double"] */
import React from 'react'

export const Header = () => {
  return (
    <header class="masthead mb-auto">
      <div class="inner">
        <h3 class="masthead-brand">Adrian L Flanagan</h3>
        <nav class="nav nav-masthead justify-content-center app-nav">
          <span class="nav-link"><a href="/">Home</a></span>
          <span class="nav-link"><a href="/about_me">About Me</a></span>
          <span class="nav-link"><a href="/contact">Contact Me</a></span>
          <span class="nav-link"><a href="/blog">Blog</a></span>
          <span class="nav-link"><a href="/portfolio">Portfolio</a></span>
          <span class="nav-link"><a href="/accounts/logout">Logout</a></span>
          <span class="nav-link"><a href="/accounts/login">Login</a></span>
          <span class="nav-link"><a href="/accounts/signup">Register</a></span>
        </nav>
      </div>
    </header>
  )
}
