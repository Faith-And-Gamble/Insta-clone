import React from 'react';
import './App.css';
import UserProfile from './components/userProfile';
import NewsInformation from './components/userProfile/data';
import './components/userProfile/user.css';
// import MyProfile from './components/userProfile2';


function App() {
  return (
    <div className="App">
      <UserProfile card={NewsInformation()}/>
      {/* <MyProfile /> */}
    </div>
  );
}

export default App;
