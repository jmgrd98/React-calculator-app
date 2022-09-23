import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [screenValue, setScreenValue] = useState<string>('')
  const [screenResult, setScreenResult] = useState<string | number>('')
  const [operation, setOperation] = useState<boolean>(false)

  const doOperation = (newOperation:string) => {
    if(newOperation === 'M'){
      let substringScreenValue:string = screenValue;
      substringScreenValue = substringScreenValue.substring(0, substringScreenValue.length -1)

      setOperation(false)
      setScreenValue(substringScreenValue)

    }

    try{
      const res = eval(screenValue)
      setScreenResult(res)
      setOperation(true)
    }
    catch(error){
      setScreenResult('Error!')
    }
  }
  
  function cleanScreen(){
    setOperation(false)
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
      setScreenValue(prevScreenValue => prevScreenValue+digit)
      setScreenResult(Number(digit))
      return
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
              <td><Button onClick={cleanScreen} buttonDigit={'C'}></Button></td>
              <td><Button onClick={doOperation} buttonDigit={'M'}></Button></td>
              <td><Button onClick={addDigitScreen} buttonDigit={'/'}></Button></td>
              <td><Button onClick={addDigitScreen} buttonDigit={'*'}></Button></td>
            </tr>
            <tr>
              <td><Button onClick={addDigitScreen} buttonDigit={'7'}></Button></td>
              <td><Button onClick={addDigitScreen} buttonDigit={'8'}></Button></td>
              <td><Button onClick={addDigitScreen} buttonDigit={'9'}></Button></td>
              <td><Button onClick={addDigitScreen} buttonDigit={'-'}></Button></td>
            </tr>
            <tr>
              <td><Button onClick={addDigitScreen} buttonDigit={'4'}></Button></td>
              <td><Button onClick={addDigitScreen} buttonDigit={'5'}></Button></td>
              <td><Button onClick={addDigitScreen} buttonDigit={'6'}></Button></td>
              <td><Button onClick={addDigitScreen} buttonDigit={'+'}></Button></td>
            </tr>
            <tr>
              <td><Button onClick={addDigitScreen} buttonDigit={'1'}></Button></td>
              <td><Button onClick={addDigitScreen} buttonDigit={'2'}></Button></td>
              <td><Button onClick={addDigitScreen} buttonDigit={'3'}></Button></td>
              <td rowSpan={2}><Button onClick={doOperation} buttonDigit={'='} className="equals"></Button></td>
            </tr>
            <tr>
              <td><Button onClick={addDigitScreen} buttonDigit={'0'} className="zero"></Button></td>
              <td><Button onClick={addDigitScreen} buttonDigit={'.'}></Button></td>
            </tr>
          </table>
        </main>

      </body>
    </div>
  )
}

export default App
