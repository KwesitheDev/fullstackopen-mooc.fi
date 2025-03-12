const SearchBox = ({ searchChange }) => { 
    return (
        <div >
            <label htmlFor="search">find Countries  </label>
            <input 
                type='search' placeholder='find countries'
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox