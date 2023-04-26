'use client'
import './App.css';
import { Dashboard } from './Pages/Dashboard/Dashboard';
import { BrowserRouter,Route,Router } from 'react-router-dom';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css"; 


function App() {
  return (
    <div className="App">
       <Dashboard> </Dashboard> 
    </div>
  );
}

export default App;
