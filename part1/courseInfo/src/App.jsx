//Header component to render course Name
const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

//COntent Component to render course parts
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, index) => ( 
        <p key = {index}> {part.name}   {part.exercises}</p>
      ))}
    </div>
  )
}

//Total Component
const Total = ({parts}) => {
  return <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course = {course} />
     <Content parts = {parts}/>
    <Total parts = {parts}/>
    </div>
  )
}

export default App