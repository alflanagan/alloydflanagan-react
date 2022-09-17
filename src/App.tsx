// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from 'react'
import { Header } from './app/components/Header'
import { Footer } from './app/components/Footer'
import { ContactMe } from './app/components/ContactMe'
import './App.css'

function App (): JSX.Element {
  const x = (
    <div className="app">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Header />
        <ContactMe />
        <Footer />
      </div>
    </div>
  )
  return x
}
export default App
