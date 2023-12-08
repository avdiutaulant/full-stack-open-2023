import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const Button = (props) =>{
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )
}


const  StatisticLine =(props) =>{
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) =>{

  const total = props.good + props.neutral + props.bad;

  if(total === 0 ){
    return <p>No feedback given</p>
  }
  
  return(
      <table>
        <tbody>
      <StatisticLine text ="good" value={props.good}/>
      <StatisticLine text = "netural" value={props.neutral} />
      <StatisticLine text = "bad" value={props.bad}/>
      <StatisticLine text = "all" value={total}/>
      <StatisticLine text = "average" value={(props.good * 1 + props.neutral * 0 + props.bad * (-1))/total}/>
      <StatisticLine text = "positive" value={parseFloat(props.good / total) * 100  + " %"}/>

      
      </tbody>
      </table>
  )
}

const App =() =>{

  const[good, setGood] = useState(0)
  const[neutral, setNeutral] = useState(0)
  const[bad,setBad] = useState(0)

  const setToValueGood = (newValue) =>{
    setGood(newValue)
  }

  const setToValueNeutral = (newValue) =>{
    setNeutral(newValue)
  }

  const setToValueBad = (newValue) =>{
    setBad(newValue)
  }
  
  

  return(
    <>
    <h1>give feedback</h1>
    <div>
      <Button handleClick={() => setToValueGood(good + 1)} text = 'good'/>
      <Button handleClick={()=> setToValueNeutral(neutral + 1)} text ='neutral'/>
      <Button handleClick={()=> setToValueBad(bad + 1)} text ='bad'/>
    </div>
    <h1>statistics</h1>
    <Statistics good={good} neutral={neutral} bad={bad}/>
    
    </>
  )

  
}




export default App
