import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const MostAnectodeVoted =(props) =>{
  return(
    <>
    <div>{props.anecdotes}</div>
    <div>has {props.max} votes</div>
    </>
  )
}

const Title = (props) =>{
  return(
    <>
    <h1>{props.text}</h1>
    </>
  )
}

const Anectodes = (props) =>{
  return(
    <>
    <div>{props.anecdotes}</div>
    <div>has {props.votes} votes</div>
    </>
  )
}

const Button = (props) =>{
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )

}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0))

  const setToValueSelected = () =>{
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex)
  }

  const setToValueVote = () =>{
    const newVotes = [...vote]
    newVotes[selected] += 1
    setVote(newVotes)
  }

  const max = Math.max(...vote)
  const index = vote.indexOf(max)




  return(
    <div>
      
      
      <Title text="Anectode of the day"/>
      <Anectodes anecdotes={anecdotes[selected]} votes={vote[selected]}/>
      <Button handleClick={()=> setToValueVote()} text="vote"/>
      <Button handleClick={()=> setToValueSelected()}  text = "next anectode"/>
      <Title text="Anectode with most votes"/>
      <MostAnectodeVoted anecdotes={anecdotes[index]} max={max}/> 

    </div>
  )
}


export default App
