import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = ({ course }) => {
  return (
    <div>
    <h1>{course}</h1>
    </div>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      <p>{parts[0].name} {parts[0].exercises}</p>
      <p>{parts[1].name} {parts[1].exercises}</p>
      <p>{parts[2].name} {parts[2].exercises}</p>
</div>
  )
}

const Total = ({ parts }) => {
  return (
    <div>
      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </div>
  )
}







// third part

// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]

//   return(
//     <div>
//       <Header course={course} />
//       <Content parts={parts} />
//       <Total parts={parts} />
      
//     </div>
//   )

// }


// const Header = ({ course }) => {
//   return (
//     <h1>{course}</h1>
//   )

// }

// const Content = ({ parts }) => {
//   return (
//     <>
//        <p> {parts[0].name}  {parts[0].exercises}</p>
//         <p>{parts[1].name}  {parts[1].exercises}</p>
//         <p>{parts[2].name}  {parts[2].exercises}</p>

//     </>
//   )
// }

// const Total = ({ parts }) => {
//   return (
//     <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
//   )
// }



//Second part



  // const part1 ={
  //   name:' Fundamentals of React',
  //   exercises: 10
  // }
  // const part2 ={
  //   name:' Using props to pass data',
  //   exercises: 7
  // }
  // const part3 ={
  //   name:' State of a component',
  //   exercises: 14
  // }
  

//   return (
//     <div>
//       <Header course={course} />
//      <Part part={part1}  />
//       <Part part={part2}  />
//       <Part part={part3}  /> 

//       <Total part1={part1} part2={part2} part3={part3} />


//     </div>
//   )
// }

// const Header = ({ course }) => {
//   return (
//     <h1>{course}</h1>
//   )

// }

// const Part =({part})=>{
//   return(
//     <div>
//     <p>{part.name} {part.exercises}</p>
   

//     </div>
//   )
// }

// const Total =({part1,part2,part3})=>{
//   return(
//     <div>
//       <p>Total {part1.exercises+part2.exercises+part3.exercises}</p>
//     </div>
//   )
// }


// const Content = ({ part1, exercises1, part2, exercises2, part3, exercises3 }) => {
//   return (
//     <>
//       <Part part={part1} exercises={exercises1} />
//       <Part part={part2} exercises={exercises2} />
//       <Part part={part3} exercises={exercises3} />
//     </>
//   )
// }

// const Part = ({ part, exercises }) => {
//   return (
//     <p>
//       {part} {exercises}
//     </p>
//   )
// }


// const Total = ({ exercises }) => {
//   return (
//     <p>Number of exercises {exercises.part1} + {exercises.part1} {exercises.part1} </p>
//   )
// }


export default App

