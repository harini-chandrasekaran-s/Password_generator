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
  const[handleText,sethandleText]=useState("");

  const[copied,setCopied]=useState("");

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
  
  
  const setPasswordLength=(val)=>{
    setPassword({
      ...Password,
      length:val,
    });

  }

  function copybtn(){
    if(handleText.length>0){
      navigator.clipboard.writeTest(handleText);
      setCopied(true);
      setInverval(()=>{
        setCopied(false);
      },2000)
    }
  }
   function generatePassword(){
     const numbersArray=[0,1,2,3,4,5,6,7,8,9];
     const symbolsArray=["!","@","#","$","%","^","&","*","(",")"];
     
     const characterCodes=Array.from(Array(26)).map((_e,i)=>i +97);
     const lowerCase=characterCodes.map(letter=>String.fromCharCode(letter));
     const upperCase=lowerCase.map(letter=>letter.toUpperCase());
    
     const {length,uppercase,lowercase,numbers,symbol}=Password;
     
     const generateTheWord=(length,uppercase,lowercase,numbers,symbol)=>{
      const availableCharacters=[
        ...(uppercase ? upperCase:[]),
        ...(lowercase ? lowerCase:[]),
        ...(numbers ? numbersArray:[]),
        ...(symbol ? symbolsArray:[]),
      ];
      const shuffleArray=(array)=>array.sort(()=>Math.random() -0.5);
      const characters=shuffleArray(availableCharacters).slice(0,length);
      sethandleText(characters.join(''));
      return characters;
     }
     generatePassword(length,uppercase,lowercase,numbers,symbol);

   }

  return (
    <>
      <div className='container'>
        <h2>Password Generator</h2>
        <div className='pass-box'>
          <div>
              <input className='pass' type="text" value={handleText} onChange={(e)=> sethandleText(e.target.value)}/>
          </div>
          <div>
             <button className='copy-btn' onClick={copybtn()}>{copied ? "Copied":"Copy text"}</button>
          </div>
        </div>
        <br></br>
        <div className="word">
         <div>
          <label>Password Length</label>
         </div>
         <div>
          <input className='txt' type="number" value={Password.length} onChange={(e)=> setPasswordLength(e.target.value)}></input>
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
        <div className="word">          
          <div>
            <label>Include Symbols</label>
          </div>
          <div>
          <Checkbox value={Password.symbol} onChange={handleChangeSymbols}/>
          </div>
        </div>
        <br></br>
        <div>
          <button className='btn'onClick={generatePassword}>Generate Password</button>
        </div>

      </div>
      
    </>
    
  )
}

export default App
