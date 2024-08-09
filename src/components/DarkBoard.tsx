import React from 'react'
import { TileData } from '../generate_board_values';
import DarkTile from './DarkTile';
import Tile from './Tile';

interface Props {
    boardData : TileData[];
    isDark? : boolean;
}

const DarkBoard : React.FC<Props> = ({boardData, isDark=true}) => {
    const boardValues = boardData;
    const dark = isDark;
    return (
        <div className='dark-board-container'>
            <div className={dark ? 'dark-row dark-row-1' : 'dark-row-magnified-view dark-row-magnified-view-1'}>
                {boardValues.slice(0,3).map((vals, index) => {
                    return dark ? (<DarkTile resource={vals.resource} value={vals.value} index={index} />) : (<Tile resource={vals.resource} value={vals.value} index={index} />)
                })}
            </div>

                <div className={dark ? 'dark-row dark-row-2' : 'dark-row-magnified-view dark-row-magnified-view-2'}>
                {boardValues.slice(3,7).map((vals, index) => {
                    return dark ? (<DarkTile resource={vals.resource} value={vals.value} index={index} />) : (<Tile resource={vals.resource} value={vals.value} index={index} />)

                })}
                </div>

                <div className={dark ? 'dark-row dark-row-3' : 'dark-row-magnified-view dark-row-magnified-view-3'}>
                {boardValues.slice(7,12).map((vals, index) => {
                    return dark ? (<DarkTile resource={vals.resource} value={vals.value} index={index} />) : (<Tile resource={vals.resource} value={vals.value} index={index} />)
                })}
                </div>

                <div className={dark ? 'dark-row dark-row-4' : 'dark-row-magnified-view dark-row-magnified-view-4'}>
                {boardValues.slice(12,16).map((vals, index) => {
                    return dark ? (<DarkTile resource={vals.resource} value={vals.value} index={index} />) : (<Tile resource={vals.resource} value={vals.value} index={index} />)
                })}
                </div>

                <div className={dark ? 'dark-row dark-row-5' : 'dark-row-magnified-view dark-row-magnified-view-5'}>
                {boardValues.slice(16, 19).map((vals, index) => {
                    return dark ? (<DarkTile resource={vals.resource} value={vals.value} index={index} />) : (<Tile resource={vals.resource} value={vals.value} index={index} />)
                })}
                </div>
        </div>
    )
}

export default DarkBoard
