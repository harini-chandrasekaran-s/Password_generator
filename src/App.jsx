import { useState } from 'react'
import './App.css'
import Checkbox from './components/checkbox'

function App() {
  const[Password, setPassword]=useState({
    length:5,
    uppercase:false,
    lowercase:false,
    numbers:false,
    symbol:false

  });

  const handleChangeUppercase =()=>{
    setPassword({
      ...Password,
      uppercase: !Password.uppercase,
    });
  }

  const handleChangeLowercase=()=>{
    setPassword({
      ...Password,
      lowercase: !Password.lowercase,
    });
  }

  const handleChangeNumbers=()=>{
    setPassword({
      ...Password,
      numbers:!Password.numbers,
    });
  }

  const handleChangeSymbols=()=>{
    setPassword({
      ...Password,
      symbol: !Password.symbol,
    });
  }
  const[handleText,sethandleText]=useState({

  });
  
  

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
          <input className='txt' type="number" value={handleText} onChange={(e)=> setPassword(e.target.value)}></input>
         </div>
        </div>
        <div className="word">
          <div>
            <label>Include uppercase letter</label>
          </div>
          <div>
          <Checkbox value={Password.uppercase} onChange={handleChangeUppercase}/>
          </div>
        </div>
        <div className="word">
          <div>
            <label>Include lowercase letter</label>
          </div>
          <div>
            <Checkbox value={Password.lowercase} onChange={handleChangeLowercase}/>
          </div>
        </div>
        <div className="word">
          <div>
            <label>Include numbers</label>
          </div>
          <div>
          <Checkbox value={Password.numbers} onChange={handleChangeNumbers}/>
          </div>
        </div>
        <div className="word">          <div>
            <label>Include Symbols</label>
          </div>
          <div>
          <Checkbox value={Password.symbol} onChange={handleChangeSymbols}/>
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
