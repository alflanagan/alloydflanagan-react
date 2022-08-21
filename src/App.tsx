import React from 'react';
import { Header } from './app/components/Header'
import { Footer } from './app/components/Footer'
import './App.css'

function App() {
      return (
    <div className="App">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Header />
        <div id="content" />
        <Footer />
      </div>
    </div>
  )
      }
export default App;
