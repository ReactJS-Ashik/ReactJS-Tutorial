import './App.css';
import React from 'react'

import { ClassComponentTable } from "./Part2/ClassComponent";
import { FunctionComponentTable } from "./Part2/FunctionComponent";

function App() {
  const UserData = ["Bhanubhakta", "Manisha Koirala", "Narayan Gopal", "Indra Bahadur Rai", "Aruna Lama", "Gopal Yonzon", "Uday Sotang", "Lakshmi Prasad Devkota", "Parijat", "Motiram Bhatta"]
  const UserData1 = ["Sunil Chettri", "Bhaichung Bhutia", "Prashant Tamang", "Tenzing Norgay", "Namratha Shrestha", "Swastima Khadka", "Sipora Tamang", "Daya Hang Rai", "Yama Buddha", "Jitu Rai"]
  const banner = "https://drive.google.com/uc?export=view&id=1A2gCRLZBSBvPveVJ5OE0F4psbi9V7JLS"
  return (
    <div className="App">
      <header className="App-header">
        <h1>Part 2: Easy Way to Create ReactJS Components</h1>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0% 2% 0% 2%' }}>
          <div style={{ width: '40%' }}>
            <img src={banner} alt="logo" style={{ width: '100%', height: 'auto' }} />
            <div>
              <p style={{ color: '#5c636f', fontWeight: 700, textAlign: 'left' }}>Class Component Data</p>
              <textarea readOnly style={{ resize: 'none', width: '100%', background: '#5c636f', color: 'white', fontSize: '17px' }} value={UserData} />
              {/* </div> */}
              {/* <div> */}
              <p style={{ color: '#5c636f', fontWeight: 700, textAlign: 'left' }}>Function Component Data</p>
              <textarea readOnly style={{ resize: 'none', width: '100%', background: '#5c636f', color: 'white', fontSize: '17px' }} value={UserData1} />
            </div>
          </div>
          <div style={{ display: 'flex', width: '60%', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '50%', }}>
              {/* <ClassComponentTable /> */}
              {/* passing data using props */}
              <ClassComponentTable UserData={UserData} />
            </div>
            <div style={{ width: '50%', }}>

              {/* <FunctionComponentTable /> */}
              {/* passing data using props */}
              <FunctionComponentTable UserData={UserData1} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
