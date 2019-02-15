import React from 'react';

export default function({changePage}) {
    function clickAction(direction) {
        changePage(direction);
    }
    return (
        <div className={'List-nav'}>
        <button onClick={()=>clickAction("prev") } className='list-nav-button'>Previous Page</button>
        <button onClick={()=>clickAction('next') } className='list-nav-button'>Next Page</button>
        </div>
    )
}