import { useState,useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
//import axios from 'axios'
import phoneService from './services/phone'

const App = () => {
  const [persons, setPersons] = useState([]); 
  const [newName, setNewName] = useState('');
  const [number, setNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  //GET Request
  useEffect(() => {
    phoneService
      .getAll()
      .then(intialPersons => setPersons(intialPersons))
    console.log('GET Working')

  }, []);


//Add NAme
  const addName = (event) => {
    event.preventDefault();
    const nameExist = persons.find(person => person.name.toLowerCase() === newName.toLowerCase());

    if (nameExist ) {
      console.log(nameExist)
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        const changedPerson = { ...nameExist, number }
        phoneService.update(nameExist.id, changedPerson)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== nameExist.id ? person : returnedPerson))
        })
      }    

      return;
    }


    const newPerson = { name: newName, number: number };
    
    phoneService
      .create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('');
        setNumber('');
      })
      .catch(error => {
        console.log('Fail', error)
        //migh be faulty, I literally don't know why I added the error to console.log
        //Felt it'll make sense to log the error as well as 'Fail"
    
      })
    //setPersons([...persons, newPerson]);

  };

  //Delete Person
  const personToDelete = (id) => {
    if (window.confirm(`Delete ${persons.find(person => person.id === id).name}?`)) {
      phoneService.removePerson(id)
        .then(() => {
          console.log("Deleted Successfully")
          setPersons(persons.filter(person => person.id !== id))
        })
      .catch(error=> console.log(error))
    }
    else{
      console.log("Deletion cancelled")
    }
  }

  //Handle Change
  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNumber(event.target.value);
  const handleSearchChange = (event) => setSearchTerm(event.target.value);

  // Filtering logic
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchTerm={searchTerm} handleSearchChange={handleSearchChange} />

      <h3>Add a new contact</h3>
      <PersonForm 
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        number={number}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>
      <Persons persons={filteredPersons} deletePerson={personToDelete} />
    </div>
  );
};

export default App;
