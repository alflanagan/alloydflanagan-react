// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from 'react'
import { Card, CardText, CardBody } from 'reactstrap'
import './Footer.css'

export const Footer = (): JSX.Element => {
  return (
    <footer className="mastfoot mt-auto app-footer">
      <div className="inner">
        <div className="container">
          <div className="row">
            <div className="col-5">
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
                  ,{' '}
                  <a
                    href="https://redux.js.org/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Redux. &nbsp;&nbsp;
                  </a>
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
            <div className="col"></div>
            <div className="col-5">
              <Card id="copyright">
                <CardBody className="p-1 text-dark">
                  <CardText>
                    &copy; A Lloyd Flanagan 2022 License GPL3.
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
