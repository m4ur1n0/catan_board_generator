import React from 'react'
import { TileData } from '../generate_board_values';
import DarkReload from './DarkReload';

interface BoardData {
  saveData : TileData[][];
  setSaveData : Function;
  setBoardVals : Function;
  boardVals : TileData[];
}

const DarkSaves = (p : BoardData) => {
  // rgba(35,31,32,255) #231f20
  const saves = p.saveData;
  const [setSaveData, boardVals, setBoardVals] = [p.setSaveData, p.boardVals, p.setBoardVals];

  function saveData(data_slot : number) {
    let newSaveData = JSON.parse(JSON.stringify(saves));
    newSaveData[data_slot] = boardVals;
    setSaveData(newSaveData);
    
  }

  function loadData(data_slot : number) {
    let newSaveData = JSON.parse(JSON.stringify(saves));
    newSaveData[3] = JSON.parse(JSON.stringify(boardVals)); // this is the 'back' data
    newSaveData[data_slot] = [];
    setBoardVals(saves[data_slot]);
    setSaveData(newSaveData);
  }

  function backFunction() {
    // let newSaveData = JSON.parse(JSON.stringify(saves));
    // const temp = boardVals;
    // setBoardVals(saves[3]);
    // newSaveData[3] = temp;
    // setSaveData(newSaveData);
    if (p.saveData[3].length > 0) {
      setBoardVals(saves[3])
    }

  }

  return (
    <div className='dark-buttons-box'>
      <div className='dark-reload-and-back'>
        <DarkReload boardValues={boardVals} setBoardValues={setBoardVals} saveData={p.saveData} setSaveData={p.setSaveData}/>
        <div className='dark-side-button dark-back-button' onClick={backFunction}>
      </div>
      </div>
      <div className='dark-save-buttons'>
        
        {Object.values(saves).slice(0, 3).map((save, index) => {
          console.log(`EXPLORING SAVE : ${save}`)
          return (
            <div className={`dark-side-button dark-save-button dark-save-${index + 1} ${(save != null && save.length > 0) ? `saved saved-${index + 1}` : `empty-save empty-save-${index}`}`} onClick={save.length > 0 ? () => {loadData(index)} : () => {saveData(index)}}>
              {/* {(save != null && save.length > 0) ? `load ${index + 1}` : `save`} */}
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default DarkSaves