import React from 'react';
import ListItem from './ListItem';
import './List.css'
export default function List({list}){
    return (
        <ul className="list">
            <ListItem listItem={{name:"Name", birth_year:"Year of Birth", height:"Height (cm)"}} />
            {
                list.map((listItem, index )=> <ListItem key={index} listItem={listItem} />)
            }
        </ul>
    )
}