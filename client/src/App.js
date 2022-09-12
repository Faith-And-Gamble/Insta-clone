import React from 'react';
import ChatBox from './components/messageBox';
import DataOfChat from './components/messageBox/mapDATA/data';
import IDOfUsers from './components/messageBox/mapDATA/dataUser';
import NavBar from './components/navBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ChatBox chat={DataOfChat()} chatID={IDOfUsers()} />
    </div>
  );
}

export default App;