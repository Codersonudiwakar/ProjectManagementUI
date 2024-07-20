import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentsList = ({ id }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get(`/getAllComments/${id}`)
      .then(response => {
        setMessages(response.data);
      })
      .catch(error => {
        console.error('Error fetching task data:', error);
      });
  }, [id]);

  return (
    <div>
      <h1>Message List</h1>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            <p><strong>Data:</strong> {message.comments}</p>
            <p><strong>Chat:</strong> {message.commentUsername}</p>
            <p><strong>Chat:</strong> {message.createdDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;
