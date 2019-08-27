import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  return (
    <h2>
      {props.course}
    </h2>
  )
}

      
const Content = (props) => {
  console.log(props.parts);
  return (
    <div>
      <Part
        part={props.parts.name}
        exercises={props.parts.exercises}
      />
      <Part
        part={props.parts.name}
        exercises={props.parts.exercises}
      />
      <Part
        part={props.parts.name}
        exercises={props.parts.exercises}
      />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      {props.part}
      {props.exercises}
    </div>
  )
}

const Total = (props) => {
  console.log(props.lenght);
  return (
    <p>
      Number of exercises {props.parts.exercises}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
    <Header course={course}/>
    <Content parts={parts}/>
    <Total  parts={parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))