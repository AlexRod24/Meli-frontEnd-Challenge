import React, { useRef } from 'react';
import { NavLink } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";


export default function SearchForm() {

    const { value1, value2 } = React.useContext(SearchContext);
    const [query, setQuery] = value1;
    const [results, setResults] = value2;

    /* Guarda el valor ingresado para solicitar la búsqueda */
    const button = useRef('');
    const handleInputChange = () => {
        setQuery(button.current.value);
    };

    /* Limpia los resultados */
    const handleClick = () => {
        setResults([]);
    };

    return (
        <form className='nav-search_container flex-item'>
           <input
                ref={button}
                type="text"
                className='nav-search_input'
                placeholder='Nunca dejes de buscar'
                onChange={handleInputChange}
           />
           <NavLink  
               to={`/items?search=${query}`}
               onClick={handleClick}
            >
                <button
                    className='nav-search_button'
                    type='text'
                >
                <span
                className='nav-search_button-icon'
                >
                 </span>
                </button>
            </NavLink>
       </form>
       );
}



