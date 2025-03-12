const Countries = ({ filteredCountries,handleShowCountry }) => {

    if (filteredCountries.length > 10) {
        return <p>Too many matches, specify another filter</p>
    } else {
                return (
        <div>
            {filteredCountries.map(country => (
                <div key={country.name.common}>
                    <p>{country.name.common} <button onClick={() => handleShowCountry(country)}>show</button>
</p>
                    
                </div>
            ))}
        </div>)
        }
    }


export default Countries