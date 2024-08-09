import React from 'react'
import DarkSaves from './DarkSaves'
import { TileData } from '../generate_board_values';
import DarkBoard from './DarkBoard';
import DarkMagnified from './DarkMagnified';

interface Props {
    boardVals : TileData[];
    setBoardVals : Function;
    saveData : TileData[][];
    setSavedData : Function;
}

const DarkContent = (p : Props) => {
    const [boardVals, setBoardVals, saveData, setSavedData] = [p.boardVals, p.setBoardVals, p.saveData, p.setSavedData];

    return (
        <div className='dark-content'>
            <DarkMagnified boardVals={boardVals} />
            <DarkBoard boardData={boardVals}/>
            <DarkSaves saveData={saveData} setSaveData={setSavedData} boardVals={boardVals} setBoardVals={setBoardVals}/>
        </div>
    )
}

export default DarkContent