import React, { useState } from 'react';
import './style.css';
import Card from 'react-bootstrap/Card';
import { myAxios } from './service/service';
import { ToastContainer, toast } from 'react-toastify';

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

const assignees = [
    { value: 'john_doe', label: 'John Doe' },
    { value: 'jane_smith', label: 'Jane Smith' },
];

const CreateTask = () => {
    const [formData, setFormData] = useState({
        project: '',
        taskType: '',
        taskTitle: '',
        taskDescription: '',
        taskPriority: '',
        assigneUser: '',
        taskPoing: '',
    });

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const [searchQuery, setSearchQuery] = useState('');
    const [assignees, setAssignees] = useState([]);
    const handleSearchChange = async (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.length > 2) { // Call API only if query length is greater than 2
            try {
                const response = await myAxios.get(`/searchAssignees?query=${query}`);
                setAssignees(response.data); // Assume response.data is an array of { value, label }
            } catch (error) {
                console.error('Error searching assignees:', error);
            }
        } else {
            setAssignees([]);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiUrl = '/tasks';

        try {
            const response = await myAxios.post(apiUrl, formData);
            console.log('Response:', response.data);
            toast.success('Task created successfully', { autoClose: 5000 });
        } catch (error) {
            console.error('Error:', error);
            toast.error('Task creation failed', { autoClose: 5000 });
        }
    }

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
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                placeholder="Search by User ID or Name or Email"
                            />
                            <label>Points</label>
                            <input
                                type="text"
                                value={formData.taskPoing}
                                onChange={(e) => handleChange('taskPoing', e.target.value)}
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
