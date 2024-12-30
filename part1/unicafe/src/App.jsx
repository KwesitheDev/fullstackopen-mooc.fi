import { useState } from 'react'


//button to increase ratings

const Button = ({onClick,text}) =>  {
 return( <button onClick={onClick} >
    {text}
 </button>
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
        <p>All: {total}</p>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Average: {(good - bad) / total}</p>
        <p>Positive: {(good / total) * 100} %</p>
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