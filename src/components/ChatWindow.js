//ChatWindows.js
import React, { useState } from 'react';
import MessageList from './MessageList';
import UserInput from './UserInput';

function ChatWindow() {
  const [messages, setMessages] = useState([]);

  // Fonction pour ajouter des messages à l'état
  const addMessage = (text, sender) => {
    setMessages(prevMessages => [...prevMessages, { text, sender }]);
  };

  return (
    <div className="chat-window">
      <MessageList messages={messages} />
      <UserInput onSendMessage={addMessage} />
    </div>
  );
}

export default ChatWindow;
