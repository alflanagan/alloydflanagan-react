/* eslint jsx-quotes: ["error", "prefer-double"] */
import React from 'react'
import './Footer.css'

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
              <div id="background-image-box">
                <span id="bkgnd-image-credit">
                  Background Image:
                  <a
                    href="https://unsplash.com/@davidmoum?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Download free do whatever you want high-resolution photos from David Moum"
                  >
                    <span style={{ display: 'inline-block', padding: '2px 3px' }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          height: '12px',
                          width: 'auto',
                          position: 'relative',
                          'vertical-align': 'middle',
                          top: '-2px',
                          fill: 'white'
                        }}
                        viewBox="0 0 32 32"
                      >
                        <title>unsplash-logo</title>
                        <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
                      </svg>
                    </span>
                    <span style={{ display: 'inline-block', padding: '2px 3px' }}>
                      David Moum
                    </span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
