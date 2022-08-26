import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [screenValue, setScreenValue] = useState<string>('')
  const [screenResult, setScreenResult] = useState<string>('')
  const [operation, setOperation] = useState<boolean>(false)

  const doOperation = (newOperation:string) =>{
    if(newOperation === 'bs'){
      let substringScreenValue = screenValue;
      screenValue = 
    }
  }
  
  function cleanScreen(){
    setScreenValue('')
    setScreenResult('0')
  }

  const addDigitScreen = (digit:string) => {
    if(screenValue.length >= 15){
      return
    }
    if((digit === '+' || digit === '-' || digit === 'x' || digit === '/')
    && operation){
      setOperation(false)
      setScreenValue(prevValue => prevValue+digit.toString())
    }
    if(operation){
      setOperation(false)
      setScreenValue(digit.toString())
      return
    }
    setScreenValue(prevValue => prevValue+digit.toString())
    setScreenResult(prevDigit => prevDigit+digit.toString())
  }

  return (
    <div className="App">
      <body>
        
        <main>

          <div id="output">

            <p>{screenValue}</p>
            <p>{screenResult.toString()}</p>

          </div>
          <table>
            <tr>
              <td><button onClick={cleanScreen}>C</button></td>
              <td><button>M</button></td>
              <td><button onClick={() => addDigitScreen('/')}>/</button></td>
              <td><button onClick={() => addDigitScreen('*')}>X</button></td>
            </tr>
            <tr>
              <td><button onClick={() => addDigitScreen('7')}>7</button></td>
              <td><button onClick={() => addDigitScreen('8')}>8</button></td>
              <td><button onClick={() => addDigitScreen('9')}>9</button></td>
              <td><button onClick={() => addDigitScreen('-')}>-</button></td>
            </tr>
            <tr>
              <td><button onClick={() => addDigitScreen('4')}>4</button></td>
              <td><button onClick={() => addDigitScreen('5')}>5</button></td>
              <td><button onClick={() => addDigitScreen('6')}>6</button></td>
              <td><button onClick={() => addDigitScreen('+')}>+</button></td>
            </tr>
            <tr>
              <td><button onClick={() => addDigitScreen('1')}>1</button></td>
              <td><button onClick={() => addDigitScreen('2')}>2</button></td>
              <td><button onClick={() => addDigitScreen('3')}>3</button></td>
              <td rowSpan={2}><button id="equal">=</button></td>
            </tr>
            <tr>
              <td colSpan={2}><button id="zero" onClick={() => addDigitScreen('0')}>0</button></td>
              <td ><button onClick={() => addDigitScreen('.')}>.</button></td>
            </tr>
          </table>
        </main>

      </body>
    </div>
  )
}

export default App
