/* eslint jsx-quotes: ["error", "prefer-double"] */
import React from 'react'
import './Footer.css'
import { UnsplashCredit } from './UnsplashCredit'

export const Footer = () => {
  return (
    <footer className="mastfoot mt-auto app-footer">
      <div className="inner">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <aside className="tech-note">
                <div>
                  Based on a design by{' '}
                  <a
                    href="https://github.com/jordanhudgens"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Jordan Hudgens
                  </a>
                  .
                </div>
                <div>
                  Powered by{' '}
                  <a
                    href="https://reactjs.org/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    React
                  </a>
                </div>
                <div>
                  Styles are based on{' '}
                  <a
                    href="https://getbootstrap.com"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Bootstrap 4
                  </a>
                  .
                </div>
              </aside>
            </div>
            <div className="col-4">
              <span style={{ color: 'black', backgroundColor: 'darkgrey' }}>
                &copy; A Lloyd Flanagan 2020 License GPL3.
              </span>
            </div>
            <div className="col-4">
              <UnsplashCredit />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
