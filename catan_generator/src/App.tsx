// import './App.css'
import * as React from 'react'
import { DarkContextProvider } from './components/DarkContext'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ColorfulPage from './pages/ColorfulPage'
import DarkPage from './pages/DarkPage'
import './App.css'


function App() {

  
  
  return (
      <Router basename='/catan_board_generator'>
        <DarkContextProvider>
          <Routes>
            <Route path='/light' element={<ColorfulPage />} />
            <Route path='/' element={<DarkPage />} />
          </Routes>
        </DarkContextProvider>
      </Router>



  );
  
}

export default App
