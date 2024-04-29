//Message.js
import React from 'react';

function Message({ text, sender }) {
  const className = `message ${sender}`;
  return (
    <div className={className}>
      {text}
    </div>
  );
}

export default Message;
