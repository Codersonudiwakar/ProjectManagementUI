import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { myAxios } from './service/service';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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

    return (
        <div>

            {messages.map((message, index) => (
                <div key={index}>
                    <Card>
                    <Card.Header>User: {message.commentUsername}   Comment Date: {message.createdDate}</Card.Header>
                        <Card.Body>
                            <Card.Text>
                            {message.comments}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            ))}

        </div>
    );
};

export default CommentsList;
