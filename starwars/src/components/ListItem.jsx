import React from 'react';
export default function List({listItem}){
    return (
        <li className="listItem">{listItem.name}</li>
    )
}