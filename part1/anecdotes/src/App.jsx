import { useState } from 'react'

//button to change anecdote
const Button = ({onClick,text}) =>  {
 return( <button onClick={onClick} >
    {text}
 </button>
 )
}

//votes component to show votes each anecdote has
const Votes = ({votes}) => {
  return(
    <div>
      has {votes} votes
    </div>
  )
}




const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  //generting random number function
const randomNum = () =>  Math.floor(Math.random() * anecdotes.length)


  //initializing states
  const [selected, setSelected] = useState(0)
   const [votes, setVotes] = useState(Array(anecdotes.length).fill(0)); // Initialize votes array

    //largest Vote and it's index
  const maxVote = Math.max(...votes)
  const maxVoteIndex = votes.indexOf(maxVote)
  
   //handle vote function
  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };


  return (
    <div>
      <h2>Anecdite of the day</h2>
      {anecdotes[selected]}
      <br />
      <br />
      <Votes votes={votes[selected]} />
      <br />
      <Button onClick={() => setSelected(randomNum())} text="next anecdote" />
      <Button onClick={handleVote} text="vote" />
      <h2>Anecdote with most votes</h2>
      {maxVote > 0 ? (
        <div>
          {anecdotes[maxVoteIndex]}
          <br />
          <Votes votes={maxVote} />
        </div>
      ) : (
        <div>No votes yet</div>
      )}
    </div>
  )
}

export default App