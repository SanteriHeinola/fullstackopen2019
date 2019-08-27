import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  console.log(props.course.name);
  return (
    <h2>
      {props.course.name}
    </h2>
  )
}

      
const Content = (props) => {
  console.log(props.course);
  return (
    props.course.parts.map(course => 
      //<Part key={course.name} {...course} />
      <Part key={course.name} 
        name={course.name}
        exercises={course.exercises}
      />
    )
  )
}

const Part = (props) => {
  return (
    <div>
      {props.name}
      {props.exercises}
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.course.parts[0].exercises + 
        props.course.parts[1].exercises + props.course.parts[2].exercises}
    </p>
  )
}

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
    <Header course={course}/>
    <Content course={course}/>
    <Total  course={course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))