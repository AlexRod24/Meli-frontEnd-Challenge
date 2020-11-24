import React, { useEffect, useState } from 'react';
import ItemCard from '../components/ItemCard';
import { SearchContext } from "../context/SearchContext";
import PageLoader from '../components/PageLoader';


export default function ItemsContainer() {

    const { value2, value3 } = React.useContext(SearchContext);
    const [results, setResults] = value2;
    const [breadcrum, setBreadcrum] = value3;
    const [loading, setLoading] = useState(false);
    const queryString = require('query-string');
    const parsed = queryString.parse(window.location.search);

    /* Realiza un fecth hacia la ruta especificada en el puerto 9000 y recibirá la data */
    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:9000/api/items?q=${parsed.search}`)
        .then(res => res.json())
        .then( data => { 
            setResults(data)
            setBreadcrum(data[0].categories)
        }).catch(err => {
             console.log('Hubo un error en la búsqueda', err);
        }).finally(() => {
            setLoading(false);
       });
   },[parsed.search, setResults, setBreadcrum]);


    /* Retorna el bloque de items si la data es recibida correctamente */
    return(
    <div className='search-result_wrapper'> 
      {  loading ? <PageLoader/> :
            <section className='search-result_container'>
                 <ol>
                    {
                      results && results.map(el =>
                        el.items.map(item =>
                            <ItemCard
                                key={item.id}
                                datos={item}
                             />
                        ))
                    }
                   </ol> 
            </section>
        }
    </div>
    )
}



