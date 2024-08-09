import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassPlus, faX, faDownload } from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react'
import { TileData } from '../generate_board_values';
import DarkBoard from './DarkBoard';

interface Props {
    boardVals : TileData[];
}


const DarkMagnified = (p : Props) => {
    const [magnified, setMagnified] = useState(false);
    const boardVals = p.boardVals;

    function handleClick() {
        setMagnified(!magnified);
    }

    function handleDownload() {
        console.log("downloading image");
    }

    return (
        <>
            <div className='dark-magnifying-glass' onClick={handleClick}>
                <FontAwesomeIcon icon={faMagnifyingGlassPlus} className='dark-mag-icon'/>
            </div>
            {magnified && <div className='dark-magnified-view'>
                <FontAwesomeIcon icon={faX} onClick={handleClick} className='dark-magnifier-close'/>
                <DarkBoard boardData={boardVals} isDark={false}/>
                <div className='dark-download-button' onClick={handleDownload}>
                    {/* <FontAwesomeIcon icon={faDownload} className='dark-download-icon'/> */}
                    Download
                </div>
            </div>}
        </>
    )
}

export default DarkMagnified