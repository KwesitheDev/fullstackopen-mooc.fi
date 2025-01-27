import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '040-1234567'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')

 const addName = (event) => {
   event.preventDefault();
   const nameExist = persons.find(person => person.name === newName)
   if (nameExist) {
     alert(`${newName} is already added to phonebook`)
     return;
   }
   
    //create a new person
   const newPerson = { name: newName, number: number };
   ;

    setPersons([...persons, newPerson]);
   setNewName('');
   setNumber('');
  };

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
   
  }
  const handleNumberChange = (event) => {
    setNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName} >
        <div>
          name: <input value={newName}
            onChange={handleNameChange}
          />
          
        </div>
        <div>
          number: <input value={number}
          onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>{person.name} - {person.number}</li>
        ))}
      </ul>
    </div>
  )
}

export default App