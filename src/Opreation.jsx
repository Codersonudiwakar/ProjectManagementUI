import React, { useState, useEffect } from 'react';
import './style.css';
import Card from 'react-bootstrap/Card';
import { myAxios } from './service/service';
import { ToastContainer, toast } from 'react-toastify';
import UserSelect from './UserSelect';
import { useParams } from 'react-router-dom';

const Satges = [
    { value: 'create', label: 'CREATE' },
    { value: 'inProgress', label: 'IN PROGRESS' },
    { value: 'readyForDemo', label: 'READY FOR DEMO' },
    { value: 'inDev', label: 'IN DEVELOPMENT' },
    { value: 'inQa', label: 'IN QA' },
    { value: 'readyForQA', label: 'READY FOR QA' },
    { value: 'failedInQA', label: 'FAILED IN QA' },
    { value: 'close', label: 'CLOSED' },
    { value: 'reOpen', label: 'RE-OPEN' },
   // { value: '', label: 'IN QA' },
];


const TaskStage = (Tid) => {
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
        assigneeUser: '',
        taskPoint: ''
    });

    useEffect(() => {
        if (task) {
            setFormData({
                taskTitle: task.taskTitle || '',
                taskDescription: task.taskDescription || '',
                assigneeUser: task.assigneeUser || '',
                currentStatus: task.currentStatus || '',
                taskType: task.taskType || '',
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
    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiUrl = `/editTask/${id}`;
        try {
            const response = await myAxios.patch(apiUrl, formData);
            console.log('Response:', response.data);
            toast.success('Task Update successfully', { autoClose: 5000 });
        } catch (error) {
            console.error('Error:', error);
            toast.error('Task Update failed', { autoClose: 5000 });
        }
    };

    return (
    
                            <select
                                className='select'
                                name='taskPriority'
                                value={formData.taskPriority}
                                onChange={handleChange}
                            >
                                <option value="">Select Priority</option>
                                {Satges.map((priority) => (
                                    <option key={priority.value} value={priority.value}>
                                        {priority.label}
                                    </option>
                                ))}
                            </select>
    );
};

export default TaskStage;
