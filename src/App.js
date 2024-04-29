import React from 'react';
import './App.css'; // Assurez-vous que le CSS de base est correct
import ChatWindow from './components/ChatWindow';



function App() {
  const handleLogin = () => {
    window.location.href = 'https://cynthia.adaptable.app/auth/google';
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cynthia - Votre Assistant Personnel</h1>
        <button onClick={handleLogin} className="login-button">Connect with Google</button>
      </header>
      <ChatWindow />
    </div>
  );
}

export default App;
