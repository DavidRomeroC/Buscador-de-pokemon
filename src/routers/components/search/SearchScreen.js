import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from "../../../hooks/useForm"

export const SearchScreen = ({ setState }) => {

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)

    const { search = "" } = queryString.parse(location.search);

    const [{ searchText }, handleInputChange, reset] = useForm({
        searchText: search
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchText)
        setState(searchText);
        navigate(`/items?search=${searchText}`);
        reset();
    }

    return (
        <div className="search__main-container">
            <div className="search__main">
                <h1>Search Pokémon</h1>
                <div className="search__form-content">
                    <form className='search__form'>
                        <input
                            className='search__input'
                            type="text"
                            name="searchText"
                            placeholder="Type a pokémon"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        <button type="submit" onClick={handleSubmit}>Search</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
