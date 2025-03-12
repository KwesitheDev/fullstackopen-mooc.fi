import { useState, useEffect } from 'react'
import SearchBox from './components/SearchBox'
import axios from 'axios'
import Countries from './components/Countries'
import CountryDetail from './components/CountryDetails'

function App() {
  //const [value, setValue] = useState('')
  const [countries, setCountries] = useState([])
  const [searchItem, setSearchItem] = useState('')
  const [selectedCountry,setSelectedCountry] = useState('')

  //onSearch event  funcction
  const  searchChange =(event)=>{
    setSearchItem(event.target.value) 
  }

    const handleShowCountry = (country) => {
    setSelectedCountry(country)
  }


  useEffect(() => {
    if (!searchItem) {
      console.log('dfghjnmk')
      return
    }
      console.log('searching countries now')
      axios
        .get('https://studies.cs.helsinki.fi/restcountries/api/all')
        .then(response => {
          setCountries(response.data)

        })

    
  },[searchItem])

  //showCountry
  
  
  //filtering
  const filteredCountries = countries.filter(country =>country.name.common.toLowerCase().includes(searchItem.toLowerCase()))
  console.log(filteredCountries)
  return (
    <>
  
        <h1>Vite + React </h1>
      <SearchBox searchChange={searchChange} />
      {filteredCountries.length === 1 || selectedCountry ? (
        <CountryDetail country={selectedCountry || filteredCountries[0]} />
      ) : (
        <Countries filteredCountries={filteredCountries} handleShowCountry={handleShowCountry} />
      )}
    </>)
}
export default App
