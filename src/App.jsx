import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      <div className='container'>
        <h2>Password Generator</h2>
        <div className='pass-box'>
          <div>
              <input className='pass' type="text" placeholder='' autoComplete="off"/>
          </div>
          <div>
             <button className='copy-btn'>Copy text</button>
          </div>
        </div>
        <br></br>
        <div className="word">
         <div>
          <label>Password Length</label>
         </div>
         <div>
          <input className='txt' type="number"></input>
         </div>
        </div>
        <div className="word">
          <div>
            <label>Include uppercase letter</label>
          </div>
          <div>
            <input className='box' type="checkbox"></input>
          </div>
        </div>
        <div className="word">
          <div>
            <label>Include lowercase letter</label>
          </div>
          <div>
            <input className='box' type="checkbox"></input>
          </div>
        </div>
        <div className="word">
          <div>
            <label>Include numbers</label>
          </div>
          <div>
            <input className='box' type="checkbox"></input>
          </div>
        </div>
        <div className="word">          <div>
            <label>Include Symbols</label>
          </div>
          <div>
            <input className='box' type="checkbox"></input>
          </div>
        </div>
        <br></br>
        <div>
          <button className='btn'>Generate Password</button>
        </div>

      </div>
      
    </>
    
  )
}

export default App
