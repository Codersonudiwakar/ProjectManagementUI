import React, { useState } from 'react';
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
    { value: 'BUG', label: 'BUG' },
    { value: 'STORY', label: 'STORY' },
    { value: 'TEST PLAN', label: 'TEST PLAN' },
    { value: 'FEATURE', label: 'FEATURE' },
];

const taskEnvoirments = [
    { value: 'QA', label: 'QA' },
    { value: 'NA', label: 'NA' },
    { value: 'DEVELOPMENT', label: 'DEVELOPMENT' },
    { value: 'SIT', label: 'SIT' },
    { value: 'UAT', label: 'UAT' },
    { value: 'PRODUCTION', label: 'PRODUCTION' },
];

const priorities = [
    { value: 'LOW', label: 'LOW' },
    { value: 'MEDIUM', label: 'MEDIUM' },
    { value: 'HIGH', label: 'HIGH' },
];

const CreateTask = () => {
    const [formData, setFormData] = useState({
        project: '',
        taskEnvoirment:'',
        taskType: '',
        taskTitle: '',
        taskDescription: '',
        reporterUser:'Sonu Kumar Diwakar',
        taskPriority: '',
        assigneeUser: '',
        taskPoint: '',
    });

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleUserSelect = (selectedUser) => {
        setFormData({ ...formData, assigneeUser: selectedUser ? selectedUser.value : '' });
        console.log(selectedUser+"selected user");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiUrl = '/addTask';
        console.log(formData);

        try {
            const response = await myAxios.post(apiUrl, formData);
            console.log('Response:', response.data);
            toast.success('Task created successfully', { autoClose: 5000 });
        
        } catch (error) {
            console.error('Error:', error);
            toast.error('Task creation failed', { autoClose: 5000 });
        }
    };

    return (
        <div className="main-card">
            <h2>Create New Task</h2>
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
                            <label>Envoirment</label>
                            <select
                                className='select'
                                value={formData.taskEnvoirment}
                                onChange={(e) => handleChange('taskEnvoirment', e.target.value)}
                            >
                                <option value="">Select Task Envoirment</option>
                                {taskEnvoirments.map((envoirment) => (
                                    <option key={envoirment.value} value={envoirment.value}>
                                        {envoirment.label}
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
                                value={formData.taskPoint}
                                onChange={(e) => handleChange('taskPoint', e.target.value)}
                            />
                            <button type="submit">Submit</button>
                        </form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default CreateTask;