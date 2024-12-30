import { useState } from 'react'


//button to increase ratings

const Button = ({onClick,text}) =>  {
 return( <button onClick={onClick} >
    {text}
 </button>
 )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <br />
      <Button onClick={() => setGood(good + 1)} text={'Good'} />
      <Button onClick={() => setNeutral(neutral  + 1)} text={'Neutral'} />
      <Button onClick={() => setBad(bad + 1)} text={'Bad'} />
      <br />
      <h2>statistics </h2>
      <p>All: {good + neutral + bad}</p>
      <p>Good: {good} </p>
      <p>Neutral: {neutral} </p>
      <p>Bad: {bad} </p>
      <p>Average: {(good - bad)/ (good + neutral + bad)}</p>
      <p>Positive: {(good)/(good + neutral + bad)} %</p>


    </div>
  )
}

export default App