import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { useDarkContext } from './DarkContext';

const Ownership = () => {
  const [isLightMode, toggleDarkMode] = useDarkContext();
  return (
    <div className={`${isLightMode ? "ownership" : "ownership-dark"}`}>
      <p>Built with  <FontAwesomeIcon icon={faHeart} />  by TM, SR, CR</p>
    </div>
  );
}

export default Ownership

