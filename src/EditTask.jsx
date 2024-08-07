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

const priorities = [
    { value: 'LOW', label: 'LOW' },
    { value: 'MEDIUM', label: 'MEDIUM' },
    { value: 'HIGH', label: 'HIGH' },
];

const taskEnvoirments = [
    { value: 'QA', label: 'QA' },
    { value: 'NA', label: 'NA' },
    { value: 'DEVELOPMENT', label: 'DEVELOPMENT' },
    { value: 'SIT', label: 'SIT' },
    { value: 'UAT', label: 'UAT' },
    { value: 'PRODUCTION', label: 'PRODUCTION' },
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
        taskEnvoirment:'',
        assigneeUser: '',
        taskPoint: ''
    });

    useEffect(() => {
        // Pre-fill form data when task prop changes
        if (task) {
            setFormData({
                taskTitle: task.taskTitle || '',
                taskDescription: task.taskDescription || '',
                assigneeUser: task.assigneeUser || '',
                currentStatus: task.currentStatus || '',
                taskType: task.taskType || '',
                taskEnvoirment: task.taskEnvoirment || '',
                taskPriority: task.taskPriority || '',
                taskPoint: task.taskPoint || ''
            });
        }
    }, [task]);


    const [errors, setErrors] = useState({});

    
    const id = parseInt(Tid.taskId, 10);
   

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    const [selectedUser, setSelectedUser] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiUrl = `/editTask/${id}`;

        try {
            const response = await myAxios.patch(apiUrl, formData);
            console.log('Response:', response.data);
            toast.success(id+' Update successfully', { autoClose: 5000 });
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
                            <div className='edit-page-p'><p>Project</p></div>
                            <label>Task Type</label>
                            <div className='edit-page-p'><p>{formData.taskType}</p></div>
                            
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
                             <label>Envoirment</label>
                             <select
                                className='select'
                                name='taskEnvoirment'
                                value={formData.taskEnvoirment}
                                onChange={handleChange}
                            >
                                <option value="">Select Envoirment                                </option>
                                {taskEnvoirments.map((envoirment) => (
                                    <option key={envoirment.value} value={envoirment.value}>
                                        {envoirment.label}
                                    </option>
                                ))}
                            </select>

                            <label>Priority</label>
                            <select
                                className='select'
                                name='taskPriority'
                                value={formData.taskPriority}
                                onChange={handleChange}
                            >
                                <option value="">Select Priority</option>
                                {priorities.map((priority) => (
                                    <option key={priority.value} value={priority.value}>
                                        {priority.label}
                                    </option>
                                ))}
                            </select>
                            <label>Points</label>
                            <input
                                type="text"
                                id="taskPoint"
                                name="taskPoint"
                                value={formData.taskPoint}
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
