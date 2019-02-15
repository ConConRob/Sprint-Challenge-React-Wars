import React from 'react';

export default function({changePage, prevNext}) {
    function clickAction(direction) {
        changePage(direction);
    }
    return (
        <div className={'list-nav'}>

        <button disabled={!prevNext.prev} onClick={()=>clickAction("prev") } className='list-nav-button'>Previous Page</button>
        <button onClick={()=>clickAction('next') } className='list-nav-button'>Next Page</button>
        </div>
    )
}