import React from 'react';
import ListItem from './ListItem';

export default function List({list}){
    return (
        <ul>
            {
                list.map((listItem, index )=> <ListItem key={index} listItem={listItem} />)
            }
        </ul>
    )
}