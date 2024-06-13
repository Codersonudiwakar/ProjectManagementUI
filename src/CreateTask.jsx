import React, { useState } from 'react';
import './style.css';
import Select from 'react-select';
import Card from 'react-bootstrap/Card';

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
        project: null,
        issueType: null,
        summary: '',
        description: '',
        priority: null,
        assignee: null,
        points: '',
    });

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Handle form submission logic here
    };

    return (
        
            <div class="main-card">
                  <h2>Create New Task</h2>
            <div class="inner-card">
            <Card className="text-center">
                <Card.Body>
                    <form onSubmit={handleSubmit}>
                        <label>Project</label>
                        <Select
                            className='select'
                            options={projects}
                            onChange={(selectedOption) => handleChange('project', selectedOption)}
                        />
                        <label>Task Type</label>
                        <Select
                            className='select'
                            options={issueTypes}
                            onChange={(selectedOption) => handleChange('issueType', selectedOption)}
                        />
                        <label>Task Title</label>
                        <input
                            type="text"
                            value={formData.summary}
                            onChange={(e) => handleChange('summary', e.target.value)}
                        />
                        <label>Description</label>
                        <textarea
                            value={formData.description}
                            onChange={(e) => handleChange('description', e.target.value)}
                        ></textarea>
                        <label>Priority</label>
                        <Select
                            className='select'
                            options={priorities}
                            onChange={(selectedOption) => handleChange('priority', selectedOption)}
                        />
                        <label>Assignee</label>
                        <Select
                            className='select'
                            placeholder='Search by User ID or Name or Email'
                            options={assignees}
                            onChange={(selectedOption) => handleChange('assignee', selectedOption)}
                        />
                        <label>Points</label>
                        <input
                            type="text"
                            value={formData.points}
                            onChange={(e) => handleChange('points', e.target.value)}
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
