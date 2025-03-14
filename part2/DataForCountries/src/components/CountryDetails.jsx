const CountryDetails = ({ country }) => {
    if (!country) return null

        return (
            <div>
                <h2>{country.name.common}</h2>
                <p>capital {country.capital}</p>
                <p>area {country.area}</p>
                <h3>languages:</h3>
                <ul>
                    {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
                </ul>
                <img src={country.flags.svg} alt={country.name.common} />
            </div>
        )

}

export default CountryDetails