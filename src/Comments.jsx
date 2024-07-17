// CommentForm.js
import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

function CommentForm({ db }) {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (author.trim() === '' || text.trim() === '') return;

    try {
      await addDoc(collection(db, 'comments'), {
        author,
        text,
        timestamp: serverTimestamp()
      });
      setAuthor('');
      setText('');
    } catch (error) {
      console.error('Error adding comment: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <input
        type="text"
        placeholder="Your name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <textarea
        placeholder="Your comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      ></textarea>
      <button type="submit">Submit Comment</button>
    </form>
  );
}

export default CommentForm;