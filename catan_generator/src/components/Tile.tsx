import React from 'react'
import { useDarkContext } from './DarkContext';

interface Props {
    resource : String;
    value : number;
    index : number;

}

const Tile = (p : Props) => {
    const [isLightMode, toggleDarkMode] = useDarkContext();

    const resource = p.resource;
    const value = p.value;
    const index = p.index;


        
    return (

        <div className={`${isLightMode ? `tile-${resource} tile-${index}` : `tile-${resource}-dark tile-${index}-dark`}`}>
                <div className={isLightMode ? `value-${value}` : `value-${value}-dark`}>
                    {value != 0 && <h1 className={`value ${(value === 8 || value === 6) && "red-number"}`}>{value}</h1>}
                </div>
                {(value === 12 || value === 2) && <h2 className={isLightMode ? `pips` : `pips-dark`}>.</h2>}
                {(value === 11 || value === 3) && <h2 className={isLightMode ? `pips` : `pips-dark`}>..</h2>}
                {(value === 10 || value === 4) && <h2 className={isLightMode ? `pips` : `pips-dark`}>...</h2>}
                {(value === 9 || value === 5) && <h2 className={isLightMode ? `pips` : `pips-dark`}>....</h2>}
                {(value === 8 || value === 6) && <h2 className={isLightMode ? `pips` : `pips-dark`}>.....</h2>}
        </div>

    );
    
}

export default Tile
