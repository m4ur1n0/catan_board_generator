import React from 'react'
import generate_board_values from '../generate_board_values';
import { TileData } from '../generate_board_values';
import { useDarkContext } from './DarkContext';


interface Props {
  setTilesFunc : Function;
  setOldTilesFunc : Function;
  currTiles : TileData[];
  oldTiles : TileData[];
}

const Title = (p : Props) => {
  const [isLightMode] = useDarkContext();

  const setTiles = p.setTilesFunc;
  const setOldTiles = p.setOldTilesFunc;
  const currTiles = p.currTiles;
  const oldTiles = p.oldTiles;

  function getNewTiles() {
    setOldTiles(currTiles);
    setTiles(generate_board_values());
  }

  function goBack() {
    setTiles(oldTiles);
    setOldTiles([]);
  }
<div className={isLightMode ? `` : ``}></div>
  return (
    <div className='title'>
        {/* <h1>Catan Board Generator</h1> */}
        <img src='../src/assets/CATAN.png' className={isLightMode ? `catan-logo` : `catan-logo-dark`}></img>
        <div className={isLightMode ? `button` : `button-dark`} onClick={() => {getNewTiles()}}>
          Reload
        </div>
        {oldTiles.length > 0 && <div className={isLightMode ? `back-button` : `back-button-dark`} onClick={() => {goBack()}}>Back</div>}
    </div>
  )
}

export default Title