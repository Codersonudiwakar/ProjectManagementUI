// CommentForm.js
import React, { useState } from 'react';
import { myAxios } from './service/service';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const CommentForm = (TSid) => {

    const tID=TSid.taskId;
    const [formData, setCommentData] = useState({
        taskID:tID,
        comments:'',
        createdDate:'',
        commentUsername:'Sonu kumar diwakar'
    });
    console.log("Taks id is "+tID)

    const handleChange = (field, value) => {
        setCommentData({ ...formData, [field]: value });
    };
    const handleSubmit = async (e) => {
        console.log(formData);
        e.preventDefault();
        const apiUrl = '/addComment';
        console.log(formData);
    
        try {
            const response = await myAxios.post(apiUrl, formData);
            console.log('Response:', response.data);
            toast.success('Comments Added successfully', { autoClose: 5000 });

        } catch (error) {
            console.error('Error:', error);
            toast.error('Comments creation failed', { autoClose: 5000 });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="comment-form">
            <textarea
                value={formData.comments}
                onChange={(e) => handleChange('comments', e.target.value)}
            ></textarea>
            <button type="submit">Submit Comment</button>
        </form>
    );
}

export default CommentForm;