import React, {useState} from 'react'
import { useDarkContext } from '../components/DarkContext';
import generate_board_values, { TileData } from '../generate_board_values';
import Tile from '../components/Tile'
import Title from '../components/Title'
import Ownership from '../components/Ownership'


const ColorfulPage = () => {
    const [boardValues, setBoardVals] = useState<TileData[]>(generate_board_values()); 
    const [lastBoardValues, setLastBoardValues] = useState<TileData[]>([]);
    const [isLightMode, toggleDarkMode] = useDarkContext();

    return (
        <>
            <div className={isLightMode ? `background-graphics` : `background-graphics-dark`}></div>
            <div className={isLightMode ? `second-background-graphic` : `second-background-graphic-dark`}></div>
            <div className="window">
            <Title setTilesFunc={setBoardVals} setOldTilesFunc={setLastBoardValues} currTiles={boardValues} oldTiles={lastBoardValues} />

            <div className='board-container' >
                <div className='row-1'>
                {boardValues.slice(0,3).map((vals, index) => {
                    return <Tile resource={vals.resource} value={vals.value} index={index}></Tile>
                })}
                </div>

                <div className='row-2'>
                {boardValues.slice(3,7).map((vals, index) => {
                    return <Tile resource={vals.resource} value={vals.value} index={index}></Tile>

                })}
                </div>

                <div className='row-3'>
                {boardValues.slice(7,12).map((vals, index) => {
                    return <Tile resource={vals.resource} value={vals.value} index={index}></Tile>
                })}
                </div>

                <div className='row-4'>
                {boardValues.slice(12,16).map((vals, index) => {
                    return <Tile resource={vals.resource} value={vals.value} index={index}></Tile>
                })}
                </div>

                <div className='row-5'>
                {boardValues.slice(16, 19).map((vals, index) => {
                    return <Tile resource={vals.resource} value={vals.value} index={index}></Tile>
                })}
                </div>
            </div>
                <Ownership />
            </div>
        </>
    )
}

export default ColorfulPage