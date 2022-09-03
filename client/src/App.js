import React from 'react';
import './App.css';
import UserProfile from './components/userProfile';
import NewsInformation from './components/userProfile/data';
import './components/userProfile/user.css';

function App() {
  return (
    <div className="App">
      <UserProfile card={NewsInformation()}/>
    </div>
  );
}

export default App;
