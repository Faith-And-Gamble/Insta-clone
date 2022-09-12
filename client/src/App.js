import React from 'react';
import './App.css';
import NavBar from './components/navBar';
import UserProfile from './components/userProfile';
import NewsInformation from './components/userProfile/data';

function App() {
  return (
    <div className="App">
      <NavBar />
      <UserProfile dataOfPost={NewsInformation()}/>
    </div>
  );
}

export default App;
