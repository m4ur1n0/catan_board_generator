import React from 'react'

interface Props {
    resource : String;
    value : number;
    index : number;

}

const Tile = (p : Props) => {
    const resource = p.resource;
    const value = p.value;
    const index = p.index;
        
    return (

        <div className={`tile-${resource} tile-${index}`} key={index}>
            <div className={`value-${value} value`}>
                <h1 className={`${(value === 8 || value === 6) && "red-number"}`}>{value}</h1>
            </div>
            {(value === 12 || value === 2) && <h2 className='pips'>.</h2>}
            {(value === 11 || value === 3) && <h2 className='pips'>..</h2>}
            {(value === 10 || value === 4) && <h2 className='pips'>...</h2>}
            {(value === 9 || value === 5) && <h2 className='pips'>....</h2>}
            {(value === 8 || value === 6) && <h2 className='pips'>.....</h2>}
        </div> 

    );
    
}

export default Tile
