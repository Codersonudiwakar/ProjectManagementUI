import React, { useState, useEffect } from 'react';
import './style.css';
import Card from 'react-bootstrap/Card';
import { myAxios } from './service/service';
import { ToastContainer, toast } from 'react-toastify';
import UserSelect from './UserSelect';

const projects = [
    { value: 'project1', label: 'Project 1' },
    { value: 'project2', label: 'Project 2' },
];

const issueTypes = [
    { value: 'bug', label: 'Bug' },
    { value: 'feature', label: 'Feature' },
];

const priorities = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
];

const EditTask = ({ taskToEdit }) => {
    const [formData, setFormData] = useState({
        project: '',
        taskType: '',
        taskTitle: '',
        taskDescription: '',
        taskPriority: '',
        assignee: '',
        taskPoints: '',
    });
    const [isEditing, setIsEditing] = useState(false);
    const [taskId, setTaskId] = useState(null);

    useEffect(() => {
        if (taskToEdit) {
            setFormData({
                project: taskToEdit.project,
                taskType: taskToEdit.taskType,
                taskTitle: taskToEdit.taskTitle,
                taskDescription: taskToEdit.taskDescription,
                taskPriority: taskToEdit.taskPriority,
                assignee: taskToEdit.assignee,
                taskPoints: taskToEdit.taskPoints,
            });
            setIsEditing(true);
            setTaskId(taskToEdit.id);
        }
    }, [taskToEdit]);

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleUserSelect = (selectedUser) => {
        setFormData({ ...formData, assignee: selectedUser ? selectedUser.value : '' });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiUrl = '/editTask/${taskId}';

        try {
            const response = await myAxios.post(apiUrl, formData);
            console.log('Response:', response.data);
            toast.success('Task created successfully', { autoClose: 1000 });
        } catch (error) {
            console.error('Error:', error);
            toast.error('Task creation failed', { autoClose: 5000 });
        }
    };

    return (
        <div className="main-card">
            <h2>{isEditing ? 'Edit Task' : 'Edit Task'}</h2>
            <div className="inner-card">
                <Card className="text-center">
                    <Card.Body>
                        <form onSubmit={handleSubmit}>
                            <label>Project</label>
                            <select
                                className='select'
                                value={formData.project}
                                onChange={(e) => handleChange('project', e.target.value)}
                            >
                                <option value="">Select Project</option>
                                {projects.map((project) => (
                                    <option key={project.value} value={project.value}>
                                        {project.label}
                                    </option>
                                ))}
                            </select>
                            <label>Task Type</label>
                            <select
                                className='select'
                                value={formData.taskType}
                                onChange={(e) => handleChange('taskType', e.target.value)}
                            >
                                <option value="">Select Task Type</option>
                                {issueTypes.map((type) => (
                                    <option key={type.value} value={type.value}>
                                        {type.label}
                                    </option>
                                ))}
                            </select>
                            <label>Task Title</label>
                            <input
                                type="text"
                                value={formData.taskTitle}
                                onChange={(e) => handleChange('taskTitle', e.target.value)}
                            />
                            <label>Task Description</label>
                            <textarea
                                value={formData.taskDescription}
                                onChange={(e) => handleChange('taskDescription', e.target.value)}
                            ></textarea>
                            <label>Priority</label>
                            <select
                                className='select'
                                value={formData.taskPriority}
                                onChange={(e) => handleChange('taskPriority', e.target.value)}
                            >
                                <option value="">Select Priority</option>
                                {priorities.map((priority) => (
                                    <option key={priority.value} value={priority.value}>
                                        {priority.label}
                                    </option>
                                ))}
                            </select>
                            <label>Assignee</label>
                            <UserSelect onUserSelect={handleUserSelect} />
                            <label>Points</label>
                            <input
                                type="text"
                                value={formData.taskPoints}
                                onChange={(e) => handleChange('taskPoints', e.target.value)}
                            />
                            <button type="submit">{isEditing ? 'Update' : 'Submit'}</button>
                        </form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default EditTask;
