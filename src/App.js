import React from 'react';
import logo from './logo.svg';
import NavMenu from './Component/NavMenu'
import ContentDetail from './Component/ContentDetail'
import MainContent from './Component/MainContent'
import './App.css';

function App() {
  return (
    <div className="containerComp">
      <div className="item"><NavMenu></NavMenu></div>
      <div className="item"><MainContent></MainContent></div>
      <div className="item"><ContentDetail></ContentDetail></div>
    </div>
  )
}

export default App;
