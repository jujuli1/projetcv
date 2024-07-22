import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import SideMenu from './components/sideMenu';


function App() {
  return (
    <div className="App">

<BrowserRouter>
<SideMenu/>
      
</BrowserRouter>
      
      
    </div>
  );
}

export default App;
