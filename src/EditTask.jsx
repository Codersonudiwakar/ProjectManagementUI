import React, { useState, useEffect } from 'react';
import './style.css';
import Card from 'react-bootstrap/Card';
import { myAxios } from './service/service';
import { ToastContainer, toast } from 'react-toastify';
import UserSelect from './UserSelect';
import { useParams } from 'react-router-dom';

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

const EditTask = (Tid) => {
    const { taskId } = useParams();
    const [task, setTask] = useState(null);

    useEffect(() => {
        myAxios.get(`/getOneTask/${id}`)
            .then(response => {
                setTask(response.data);
                console.log(" this is task data");
                console.log(task);
            })
            .catch(error => {
                console.error('Error fetching task data:', error);
            });
    }, [taskId]);

    console.log(task);
    const [formData, setFormData] = useState({
        taskType: '',
        taskTitle: '',
        taskDescription: '',
        taskPriority: '',
        assignee: '',
        taskPoints: ''
    });

    useEffect(() => {
        // Pre-fill form data when task prop changes
        if (task) {
            setFormData({
                taskTitle: task.taskTitle || '',
                taskDescription: task.taskDescription || '',
                assigneUser: task.assigneUser || '',
                currentStatus: task.currentStatus || '',
                taskType: task.taskType || '',
                taskPriority: task.taskPriority || '',
                taskPoing: task.taskPoing || ''
            });
        }
    }, [task]);


    const [errors, setErrors] = useState({});

    console.log("Before conversion+" + Tid.taskId);
    const id = parseInt(Tid.taskId, 10);
    console.log("After conversion+" + id);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleUserSelect = (selectedUser) => {
        setFormData({ ...formData, assignee: selectedUser ? selectedUser.value : '' });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiUrl = `/editTask/${id}`;

        try {
            const response = await myAxios.post(apiUrl, formData);
            console.log('Response:', response.data);
            toast.success('Task Update successfully', { autoClose: 5000 });
        } catch (error) {
            console.error('Error:', error);
            toast.error('Task Update failed', { autoClose: 5000 });
        }
    };


    return (
        <div className="main-card">
            <h2>Edit Task</h2>
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
    onChange={(e) => handleChange(e)}
    name="taskType"
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
                                id="taskTitle"
                                name="taskTitle"
                                value={formData.taskTitle}
                                onChange={handleChange}
                            />

                            <label>Task Description</label>
                            <textarea
                                id="taskDescription"
                                name="taskDescription"
                                value={formData.taskDescription}
                                onChange={handleChange}
                            />
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
                                id="taskPoing"
                                name="taskPoing"
                                value={formData.taskPoing}
                                onChange={handleChange}
                            />
                            <button type="submit">Update Task</button>
                        </form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default EditTask;