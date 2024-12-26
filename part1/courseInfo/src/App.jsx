//Header component to render course Name
const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

//COntent Component to render course parts
const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part, index) => ( 
        <p key = {index}> {part.name}   {part.exercises}</p>
      ))}
    </div>
  )
}

//Total Component
const Total = ({course}) => {
  return <p>Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
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
      <Header course = {course} />
     <Content course = {course}/>
     <Total course = {course}/>

    </div>
  )
}

export default App