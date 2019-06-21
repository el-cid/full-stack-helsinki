import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts.part1.name} exercises={props.parts.part1.exercises} />
      <Part part={props.parts.part2.name} exercises={props.parts.part2.exercises} />
      <Part part={props.parts.part3.name} exercises={props.parts.part3.exercises} />
    </div>
  )
}

const Total = (props) => {
  let total = 0;
  for (const part in props.parts) {
    total += props.parts[part].exercises;
  }

  return (
    <p>
      Number of exercises {total}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const parts = { part1, part2, part3 }

  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
