
import { useState } from 'react'
import Tile from '../components/Tile'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [output, setOutput] = useState<string>("[]");
  const runScript = async () => {
    // Construct the URL based on the current location
    const url = `http://${window.location.hostname}:5001/run-script`;

    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await resp.text();
      setOutput(data); // Store the output in state
    } catch (error) {
      console.error(error);

    }
  }
  const data = output;
  // assuming all goes well (assuming)
  const validJsonStr = data.trim().replace(/'/g, '"');
  const board_values: (string | number)[][] = JSON.parse(validJsonStr);
  // const board_values = [['stone', 9, 'A'], ['clay', 3, 'B'], ['desert', 0, 'C'], ['clay', 10, 'D'], ['sheep', 10, 'E'], ['wood', 9, 'F'], ['stone', 6, 'G'], ['sheep', 5, 'H'], ['hay', 4, 'I'], ['hay', 11, 'J'], ['wood', 12, 'K'], ['sheep', 6, 'L'], ['hay', 3, 'M'], ['stone', 11, 'N'], ['wood', 8, 'O'], ['wood', 5, 'P'], ['sheep', 4, 'Q'], ['hay', 8, 'R'], ['clay', 2, 'S']]
  
  return (
    <div className="window">
      <div className='board-container' >
        <div className='row-1'>
          {board_values.slice(0,3).map((vals, index) => {
            return <Tile resource={vals[0]} value={vals[1]} index={index}></Tile>
          })}
        </div>

        <div className='row-2'>
          {board_values.slice(3,7).map((vals, index) => {
            return <Tile resource={vals[0]} value={vals[1]} index={index}></Tile>

          })}
        </div>

        <div className='row-3'>
          {board_values.slice(7,12).map((vals, index) => {
              return <Tile resource={vals[0]} value={vals[1]} index={index}></Tile>
          })}
        </div>

        <div className='row-4'>
          {board_values.slice(12,16).map((vals, index) => {
            return <Tile resource={vals[0]} value={vals[1]} index={index}></Tile>
          })}
        </div>

        <div className='row-5'>
          {board_values.slice(16, 19).map((vals, index) => {
            return <Tile resource={vals[0]} value={vals[1]} index={index}></Tile>
          })}
        </div>
      </div>

      <div className='button' onClick={runScript}>
        Reload
      </div>
    </div>
  );
  
}

export default App
