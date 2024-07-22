import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { myAxios } from './service/service';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ToastContainer, toast } from 'react-toastify';

const CommentsList = ({ id }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        console.log(`Fetching comments for task ID: ${id}`);
        myAxios.get(`/getAllComments/${id}`)
            .then(response => {
                setMessages(response.data);
                console.log('Fetched data:', response.data);
            })
            .catch(error => {
                console.error('Error fetching task data:', error);
            });
    }, [id]);

    const deleteComments = (commentId) => {
        myAxios.delete(`/comDelete/${commentId}`)
            .then(response => {
                console.log('Deleted comment data:', response.data);
                // Update the state to remove the deleted comment from the list
                toast.success('Comments Delete successfully', { autoClose: 5000 });
                setMessages(messages.filter(message => message.id !== commentId));
            })
            .catch(error => {
                console.error('Error deleting comment data:', error);
                toast.error('Comments Delete failed', { autoClose: 5000 });
            });
    };
    
    return (
        <div>
            {messages.length > 0 ? (
                messages.map((message, index) => (
                    <div key={index}>
                        <Card className='comment-card'>
                            <Card.Header className='comments-card-header'>
                                <p style={{ display: 'inline', marginRight: '10px', fontSize: '12px', textAlign: 'left' }}>
                                    Comment User: {message.commentUsername}
                                </p>
                                <p style={{ display: 'inline', fontSize: '12px' }}>
                                    Comment Date: {message.createdDate}
                                </p>
                            </Card.Header>
                            <Card.Body className='comments-card-body'>
                                <Card.Text>
                                    {message.comments}
                                    <button
                                        style={{ display: 'inline', float: 'right' }}
                                        onClick={() => deleteComments(message.commentID)}
                                    >
                                        Delete
                                    </button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))
            ) : (
                <p>There are no comments yet on this issue.</p>
            )}
        </div>
    );
};

export default CommentsList;
