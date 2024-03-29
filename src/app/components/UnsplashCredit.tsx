/* eslint jsx-quotes: ["error", "prefer-double"] */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import { Card, CardBody } from 'reactstrap'
import './UnsplashCredit.css'

export const UnsplashCredit = (): JSX.Element => {
  return (
    <Card id="background-image-box">
      <CardBody className="p-2">
        <span id="bkgnd-image-credit">
          Background Image:{' '}
          <a
            href="https://unsplash.com/@davidmoum?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
            target="_blank"
            rel="noopener noreferrer"
            title="Download free do whatever you want high-resolution photos from David Moum"
          >
            <span id="us-logo">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <title>unsplash-logo</title>
                <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
              </svg>
            </span>
            <span id="photographer">David Moum</span>
          </a>
        </span>
      </CardBody>
    </Card>
  )
}
