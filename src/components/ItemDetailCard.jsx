import React, { useEffect, useState } from 'react';
import ActionButton from './Button'



export default function ItemDetailCard(props) {

    /* Es necesario parsear la info recibida de la descripción parea que sea manejable
    en el dom de manera correcta e insertarle los <br> correspondientes por cada /n */
    const [description, setDescription] = useState('');
    var parse = require('html-react-parser');
    useEffect(() => {
        setDescription(props.datos.description)
   }, [props.datos.description]);

    /* Recorre los datos y devuelve el monto */
    const displayPrice = () => {
        for (var key in props.datos) {
        for (var key1 in props.datos[key].amount) {
            return(props.datos.price.amount);   
        }
      }
    }

    /* Recorre los datos y devuelve los decimales */
    const displayDecimals = () => {
        for (var key in props.datos) {
        for (var key1 in props.datos[key].amount) {
            return(props.datos.price.decimals);   
        }
      }
    }


      return (
        <div className="search-result_layout_item-detail">
            <div className="search-result_wrapper_item-detail">
                <div className="search-result_item-detail_row">
                    <div className="search-result_item-detail_image flex-item">
                        <img
                            src={props.datos.picture}
                            alt={props.datos.title}
                            className="search-result_item-detail_image-pic"
                        />
                     </div>
                    <div className="search-result_item-detail_wrapper flex-item">
                            <h6
                                className='search-result_item-detail_label'>
                                {
                                    props.datos.condition !== 'new' ? 'Usado' : 'Nuevo'

                                } - {props.datos.sold_quantity} vendidos
                            </h6>
                            <h4
                                className="search-result_item-detail_title">
                                {props.datos.title}
                            </h4>
                            <h1
                                className='search-result_item-detail_price'>
                                ${displayPrice()}
                                <span 
                                    className='search-result_item-detail_decimals'
                                >
                                {displayDecimals()}
                                </span>
                            </h1>
                            <ActionButton type='text' action='Comprar'/>
                    </div>
                </div> 
                <div className='search_item-detail_block-wrapper'>
                    <h3>Descripción del producto</h3>
                    <div
                        className="search_item-detail_description"
                    >
                    <p>{parse(description.replace(/(?:\r\n|\r|\n)/g, '<br>'))}</p>
                    </div>
                </div>
            </div>                           
        </div>
        )
}

