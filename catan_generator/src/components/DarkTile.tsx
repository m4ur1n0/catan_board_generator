import React from 'react'
import val2 from '../assets/2.png'
import val3 from '../assets/3.png'
import val4 from '../assets/4.png'
import val5 from '../assets/5.png'
import val6 from '../assets/6.png'
import val8 from '../assets/8.png'
import val9 from '../assets/9.png'
import val10 from '../assets/10.png'
import val11 from '../assets/11.png'
import val12 from '../assets/12.png'


interface Props {
    resource :string;
    value : number;
    index : number;
}

const DarkTile = (p : Props) => {
    const [resource, value] = [p.resource, p.value];

    function genRandom() {
        return Math.random() * (6 + 6 + Number.EPSILON) - 6;
    }

    const rotationAngle = genRandom();

    return (
        <div className={`dark-tile dark-tile-${resource}`}
            style={{ transform: `rotate(${rotationAngle}deg)`}}
        >
            {value === 2 && <img className='dark-value' src={val2}></img>}
            {value === 3 && <img className='dark-value' src={val3}></img>}
            {value === 4 && <img className='dark-value' src={val4}></img>}
            {value === 5 && <img className='dark-value' src={val5}></img>}
            {value === 6 && <img className='dark-value dark-red-value' src={val6}></img>}
            {value === 8 && <img className='dark-value dark-red-value' src={val8}></img>}
            {value === 9 && <img className='dark-value' src={val9}></img>}
            {value === 10 && <img className='dark-value' src={val10}></img>}
            {value === 11 && <img className='dark-value' src={val11}></img>}
            {value === 12 && <img className='dark-value' src={val12}></img>}
        </div>
    )
}

export default DarkTile