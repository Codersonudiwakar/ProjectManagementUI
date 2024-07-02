import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { myAxios } from './service/service';

const ViewTask = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    myAxios.get(`/getOneTask/${id}`)
      .then(response => {
        setTask(response.data);
      })
      .catch(error => {
        console.error('Error fetching task data:', error);
      });
  }, [id]);

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Task Details</h1>
      <p>Task ID: {task.taskID}</p>
      <p>Title: {task.taskTitle}</p>
      <p>Status: {task.currentStatus}</p>
      <p>Created By: {task.reporterUser}</p>
      <p>Created Date: {task.createdDate}</p>
      <p>Assign To: {task.assignedUser}</p>
    </div>
  );
};

export default ViewTask;
