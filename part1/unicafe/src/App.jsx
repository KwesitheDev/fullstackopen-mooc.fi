import { useState } from 'react'


//button to increase ratings

const Button = ({onClick,text, p}) =>  {
 return( <button onClick={onClick} >
    {text}
 </button>
 )
}

//StaticsticLine Component
const StaticsticLine = ({ text, value, p}) => {

  return (
       <tr>
      <td>{text}</td>
      <td>{value} {p}</td>
    </tr>
  )
}

//Refactored Statistic Component
const Statistics = ({ allFeedback }) => {
  const { good, neutral, bad } = allFeedback; // Destructure the properties
  const total = good + neutral + bad;

  if (total === 0) {
    return (
      <>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </>
    );
  } else {
    return (
      <div>
        <h2>Statistics</h2>
                <table>
          <tbody>
            <StaticsticLine text="All" value={total} />
            <StaticsticLine text="Good" value={good} />
            <StaticsticLine text="Neutral" value={neutral} />
            <StaticsticLine text="Bad" value={bad} />
            <StaticsticLine text="Average" value={(good - bad) / total} />
            <StaticsticLine text="Positive" value={(good / total) * 100} p='%' />
          </tbody>
        </table>
      </div>
    );
  }
};

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const allFeedback = { good, neutral, bad }
  

  return (
    <div>
      <h2>give feedback</h2>
      <br />
      <Button onClick={() => setGood(good + 1)} text={'Good'} />
      <Button onClick={() => setNeutral(neutral + 1)} text={'Neutral'} />
      <Button onClick={() => setBad(bad + 1)} text={'Bad'} />
      <br />
      <Statistics allFeedback={allFeedback} />
      

    </div>
  )
}

export default App