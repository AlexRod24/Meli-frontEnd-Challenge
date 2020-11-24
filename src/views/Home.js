import React from 'react';
import Breadcrum from '../components/Breadcrum';


export default function Home(props) {

    /* Elimina cualquier categoria almacenada en local o devuelve el breadcrum si el path no es "/" */

    return(
            <div className='home-container'>
                { 
                window.location.pathname === "/" ? localStorage.removeItem('breadcrumValues') : <Breadcrum/>
                }
                {props.children}
            </div>
        );
}