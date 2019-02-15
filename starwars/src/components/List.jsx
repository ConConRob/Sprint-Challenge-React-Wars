import React from 'react';
import ListItem from './ListItem';
import ListNav from './ListNav';
import './List.css'
export default function List({list, changePage, prevNext}){
    return (
            <div  className="list">
                <ul  className="list">
                    <ListItem listItem={{name:"Name", birth_year:"Year of Birth", height:"Height (cm)"}} />
                    {
                        list.map((listItem, index )=> <ListItem key={index} listItem={listItem} />)
                    }
                </ul>
                <ListNav changePage={changePage} prevNext={prevNext}/>
            </div>
    )
}