import React from 'react';
export default function List({listItem}){
    return (
        <li className="list-item">
            <p className="list-item-name">{listItem.name}</p> 
            <p className="list-item-birth-year" >{listItem.birth_year}</p>
            <p className="list-item-height">{listItem.height}</p>
        </li>
    )
}