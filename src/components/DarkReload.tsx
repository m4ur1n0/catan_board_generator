import React from 'react'
import generate_board_values, { TileData } from '../generate_board_values';


interface Props {
    boardValues : TileData[];
    setBoardValues : Function;
    saveData : TileData[][];
    setSaveData : Function;
}

const DarkReload = (p : Props) => {
    const [boardValues, setBoardValues, saveData, setSaveData] = [p.boardValues, p.setBoardValues, p.saveData, p.setSaveData];

    function handleClick() {
        let newSaveData = JSON.parse(JSON.stringify(saveData));
        newSaveData[3] = boardValues;
        setBoardValues(generate_board_values());
        setSaveData(newSaveData);

    }

    return (
        <div className='dark-reload-button' onClick={handleClick}>
            
        </div>
    )
}

export default DarkReload
