import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <div className="chat-screen">
      <MessageList messages={messages} />
      <MessageInput onSendMessage={sendMessage} />
    </div>
  );
};

export default ChatScreen;
