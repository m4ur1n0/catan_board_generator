import React, { useState } from 'react'
import DarkBackground from '../components/DarkBackground'
import DarkContent from '../components/DarkContent'
import generate_board_values, {TileData} from '../generate_board_values'

const DarkPage = () => {
    const [boardValues, setBoardVals] = useState<TileData[]>(generate_board_values());
    const [savedValues, setSavedValues] = useState<TileData[][]>([[], [], [], []]);

    


    return (
        <DarkBackground boardValues={boardValues} setBoardValues={setBoardVals} saveData={savedValues} setSaveData={setSavedValues}>
            <DarkContent saveData={savedValues} setSavedData={setSavedValues} boardVals={boardValues} setBoardVals={setBoardVals}/>
        </DarkBackground>
    )
}

export default DarkPage