import React from 'react';
import './App.css';
import ChatBox from './pages/chatBox';
import DataOfChat from './pages/chatBox/mapDATA/data';
import IDOfUsers from './pages/chatBox/mapDATA/dataUser';
import NavBar from './pages/navBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ChatBox chat={DataOfChat()} chatID={IDOfUsers()} />
    </div>
  );
}

export default App;