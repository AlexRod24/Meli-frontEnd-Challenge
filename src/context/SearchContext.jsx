import React, { useState } from 'react';

/* Se genera el contexto del Search y genera un contexto inicial  */

export const SearchContext = React.createContext([]);

export const SearchProvider = (props) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [breadcrum, setBreadcrum] = useState(JSON.parse(localStorage.getItem('breadcrumValues')) || []);

    return (
        <SearchContext.Provider
            value = {
                {
                    value1: [query, setQuery],
                    value2: [results, setResults],
                    value3: [breadcrum, setBreadcrum]
                }
            }
        >
            {props.children}
        </SearchContext.Provider>
    )
}

