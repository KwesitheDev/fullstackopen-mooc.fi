const Persons = ({persons, deletePerson}) => {
    const label = 'Delete'
    return (
        <div>
            
            {persons.map(person => <p key={person.id}>{person.name} {person.number} <button onClick={()=>deletePerson(person.id)} >{label}</button> </p>)}
        </div>
    );
}
export default Persons