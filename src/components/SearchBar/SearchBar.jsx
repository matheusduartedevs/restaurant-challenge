import { BsSearch } from 'react-icons/bs'
import './SearchBar.css'

const SearchBar = () => {
    return (
        <form className='search-bar'>
            <input   
                type="search"
                placeholder='Procure seu produto'
                className='search-input'
                required
            />

            <button 
            type="submit" 
            className='search-button' >
                <BsSearch />
            </button>
        </form>
    )
}

export default SearchBar