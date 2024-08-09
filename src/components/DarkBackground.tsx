import React, {ReactNode} from 'react'
import Gif from '../assets/new-dark-bg-png.gif'
import { TileData } from '../generate_board_values';

interface DarkBackgroundProps {
    children : ReactNode;
    boardValues : TileData[];
    setBoardValues : Function;
    saveData : TileData[][];
    setSaveData : Function;
}

const DarkBackground: React.FC<DarkBackgroundProps> = (p) => {
  return (
    <div className='dark-page'>
        <img src={Gif} alt='animated background' className='dark-page-image'/>

        {p.children}
        

    </div>
  )
}

export default DarkBackground