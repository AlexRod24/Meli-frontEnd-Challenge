import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageLoader from '../components/PageLoader';
import ItemDetailCard from '../components/ItemDetailCard'
import { SearchContext } from '../context/SearchContext';


export default function ItemDetailContainer() {

    const { id } = useParams();
    const { value2, value3 } = React.useContext(SearchContext);
    const [results, setResults] = value2;
    const [breadcrum, setBreadcrum] = value3;
    const [loading, setLoading] = useState(false);
    
 
    /* Realiza un fecth hacia la ruta especificada en el puerto 9000 y recibirá la data especifica del item */
    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:9000/api/items/${id}`)
        .then(res => res.json())
        .then( data => { 
            setResults(data[0].item)
            setBreadcrum(categories => [...categories, data[0].item.title])
        }).catch((error) => {
            console.log('Hubo un error en la búsqueda', error);
       }).finally(() => {
           setLoading(false);
      });
   }, [id, setResults, setBreadcrum]);

   
   /* Retorna el bloque de Detalle del Item si la data es recibida correctamente */
    return(
        <div className='search-result_wrapper'> 
            {  loading ? <PageLoader/> :
                <section className='search-result_container'>
                    <ItemDetailCard
                        datos={results}
                    />
                </section> 
            }
        </div>
    )
}


