import { useRef } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { AddNumber, AddOperator, Calculate } from './Redux/calculatorSlice'

function App() {

  const numInp = useRef()
  const operatorInp = useRef()

  const Answer = useSelector(state => state.calculator.answer)
  const dispatch = useDispatch()

  function handleNum() {
    console.log(numInp.current.value);
    dispatch(AddNumber(+numInp.current.value))
  }

  function handleOperator() {
    console.log(operatorInp.current.value);
    dispatch(AddOperator(operatorInp.current.value))
  }

  function handleCalculate() {
    dispatch(Calculate())
  }

  return (
    <>
      <input type="number" placeholder='Number' ref={numInp} />
      <button onClick={handleNum}>Add Number</button>
      <input type="text" placeholder='Operator' ref={operatorInp} />
      <button onClick={handleOperator}>Add Operator</button><br />
      <button onClick={handleCalculate}>Calculate</button>
      <hr />
      <h1>Answer: {Answer}</h1>
    </>
  )
}

export default App
