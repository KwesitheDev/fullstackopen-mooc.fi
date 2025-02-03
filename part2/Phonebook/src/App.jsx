import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  
  const [newName, setNewName] = useState('');
  const [number, setNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

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
    setNewName(event.target.value)
   
  }
  const handleNumberChange = (event) => {
    setNumber(event.target.value)
  }
   const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtering logic for search
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: 
        <input 
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <br></br>
      <br></br>
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
        {filteredPersons.map(person => (
          <li key={person.id}>{person.name} - {person.number}</li>
        ))}
      </ul>
    </div>
  )
}

export default App