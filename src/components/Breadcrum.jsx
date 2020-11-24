import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";

const Breadcrum = () => {

    const { value3 } = React.useContext(SearchContext);
    const [breadcrum] = value3;

    /* Almacena las categorias en local y realliza un update cada vez que se solicita */
    useEffect(() => {
        localStorage.setItem('breadcrumValues', JSON.stringify(breadcrum));
    }, [breadcrum]);
    

    return  (
    <div className="breadcrumb_wrapper">
        <ol className="breadcrum_container">
            { 
                breadcrum.map((category, index) => 
                    <li className="breadcrumb_item" key={index}>
                        <NavLink
                            to={`/items?search=${category}`}
                            title={category}
                            className="breadcrumb_link"
                        >
                            <span>{category}</span>
                        </NavLink>
                        {
                        breadcrum.length - 1 === index  ?
                            null
                        : 
                        <svg
                            className="breadcrumb_arrow-right"
                            viewBox="0 0 9 14"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                d="M1 1.343L6.657 7 1 12.657"
                                fill="none"
                            >  
                            </path>
                        </svg>
                        }
                    </li>
                )
            }
        </ol>
    </div>)
    }

export default Breadcrum;

