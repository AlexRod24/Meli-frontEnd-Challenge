import React from 'react';

const ItemCard = (props) => {

    return  (
            <li className="search-result_layout_item">
                <div className="search-result_wrapper_item">
                    <div className='search-result_left-column'>
                        <div className="search-result_item_image-container">
                            <a
                                href={`/items/${props.datos.id}`}
                                title={props.datos.title}
                            >
                                <img
                                    src={props.datos.picture}
                                    className="search-result_item_image"
                                    alt={props.datos.title}
                                />
                            </a>
                         </div>
                    </div>
                    <div className='search-result_center-column'>
                        <div className="search-result_item_text">
                            <a
                                href={`/items/${props.datos.id}`}
                                title={props.datos.title}
                            >
                                <div className='search-result_item_price-wrapper'>
                                    <h4
                                        className='search-result_item_price'>
                                        ${props.datos.price.amount}
                                        <span 
                                            className='search-result_item_decimals'
                                        >
                                        {props.datos.price.decimals}
                                        </span>
                                    </h4>
                                    {
                                        props.datos.free_shipping ? null
                                        :
                                        <div
                                            className='search-result_item_free-shipping'>
                                        </div>
                                    }
                                </div>
                                <span
                                    className="search-result_item_title">
                                    {props.datos.title}
                                </span>
                                <span
                                    className='search-result_item_state'>
                                    {props.datos.condition !== 'new' ? 'Usado' : 'Nuevo'}
                                </span>
                            </a>
                         </div>
                    </div>
                    <div className='search-result_right-column'>
                        <div
                            className="search-result_item_address">
                            {props.datos.address}
                        </div>
                    </div>                             
                 </div>
            </li>
            )
}

export default ItemCard;