// src/App.js
import React, { useState } from 'react';
import './style.css';
import Card from 'react-bootstrap/Card';
import { myAxios } from './service/service';
import { ToastContainer, toast } from 'react-toastify';

const ViewTask  = ({
  taskID,
  taskTitle,
  taskDescription,
  reporterUser,
  assigneeUser,
  currentStatus,
  createdDate,
  taskType,
  taskPriority,
  taskPoint
}) => {  
  const [tableData, setTableData] = useState([]);

  return (
<>
<div className="main-card">
            <h2>Create New Task</h2>
            <div className="inner-card">
                <Card className="text-center">
                    <Card.Body>
                    <div className="task-view">
      <h1>Task Details</h1>
      <p><strong>Task ID:</strong> efwer435t</p>
      <p><strong>Title:</strong> {taskTitle}</p>
      <p><strong>Description:</strong> {taskDescription}</p>
      <p><strong>Reporter:</strong> {reporterUser}</p>
      <p><strong>Assignee:</strong> {assigneeUser}</p>
      <p><strong>Status:</strong> {currentStatus}</p>
      <p><strong>Created Date:</strong> {createdDate}</p>
      <p><strong>Type:</strong> {taskType}</p>
      <p><strong>Priority:</strong> {taskPriority}</p>
      <p><strong>Points:</strong> {taskPoint}</p>
    </div>
                    </Card.Body>
                </Card>
            </div>
        </div>



</>
  );
};

export default ViewTask ;
