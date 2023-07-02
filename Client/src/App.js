// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React , {useState} from 'react';
import Adduser from './components/Adduser';
import FindBloodGroup from './components/FindBloodGroup';


function App() {
    const [showRegister, setShowRegister] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const enableRegister =()=>{
        setShowRegister(true)

    }
    const enableInfo =()=>{
      setShowInfo(true)
      
  }
    return(
      <div>
         { !showRegister && !showInfo && <button className='Add' onClick={enableRegister}>Donate</button>}
        {showRegister && <Adduser/>}
        
        {!showRegister && !showInfo &&   <button className='Find' onClick={enableInfo}>Find Blood</button>}
        {showInfo && <FindBloodGroup/>}
        
      </div>
    )
      
    
};
export default App;