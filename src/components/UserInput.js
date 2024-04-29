//UserInput.js
import axios from 'axios';
import React, { useState } from 'react';
import SendButton from './SendButton';

function UserInput({ onSendMessage }) {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = async () => {
  if (input.trim()) {
    // Ajoute le message de l'utilisateur à la liste des messages
    onSendMessage(input, 'user');
    try {
      const response = await axios.post('https://cynthia.adaptable.app/message', { message: input });
      console.log(response)
      // Ajoute la réponse de Dialogflow à la liste des messages
      onSendMessage(response.data.response, 'bot');
      setInput('');
    } catch (error) {
      console.error('Erreur lors de l’envoi du message:', error);
      // Ici, vous pouvez aussi choisir de gérer l'erreur en l'affichant à l'utilisateur
    }
  }
};


  return (
    <div className="user-input">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            handleSend();
          }
        }}
      />
      <SendButton onClick={handleSend} />
    </div>
  );
}

export default UserInput;
