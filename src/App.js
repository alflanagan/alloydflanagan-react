/* eslint jsx-quotes: ["error", "prefer-double"] */
import React from 'react'
import { Header } from './app/components/Header'
import { Footer } from './app/components/Footer'
import './App.css'

function App () {
  return (
    <div className="App">
      <Header />
      <div id="content" />
      <Footer />
    </div>
  )
}

export default App
