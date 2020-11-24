import React from 'react';

export default function actionButton(props){
    return(
        <button
            type={props.type}
            value={props.action}
            className='search_item-detail_action-button'
        >
            {props.action}
        </button>
    )
}

