import React from 'react';
import './App.css';
import UserProfile from './components/userProfile';
import NewsInformation from './components/userProfile/data';

function App() {
  return (
    <div className="App">
      <UserProfile card={NewsInformation()}/>
    </div>
  );
}

export default App;
