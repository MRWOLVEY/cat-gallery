const SearchBox = ({searchChange,searchfield}) => {
    return(
        <div className="pa3">
            <input className="pa3 ba b--pink bg-light-pink br3" type="search" placeholder="Search Cats" onChange={searchChange}/>
        </div>
    )
}

export default SearchBox