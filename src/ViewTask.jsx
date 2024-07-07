import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { myAxios } from './service/service';
import Select from 'react-select';
import UserSelect from './UserSelect';
import EditTask from './EditTask';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-modal';

const ViewTask = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    myAxios.get(`/getOneTask/${id}`)
      .then(response => {
        setTask(response.data);
      })
      .catch(error => {
        console.error('Error fetching task data:', error);
      });
  }, [id]);

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Registration Form"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <EditTask closeModal={closeModal} />
        <button className="modal-close-button" onClick={closeModal}>Close</button>
      </Modal>
    <div class="container">
      <div>
      <h1>{task?.taskTitle}</h1>
      </div>
        <div class="header">
        <Button variant="primary" onClick={openModal}>Edit Task</Button>{' '}
        <button>To Do</button>
        <UserSelect/>
        </div>
        
        <div class="details">   
        <h2>Details</h2>         
            <div class="table-container">
    <table>
       
        <tr>
            <td>Type :</td>
            <td>{task?.taskType}</td>
        </tr>
        <tr>
        <td>Priority :</td>
        <td>{task?.taskPriority}</td>
        </tr>
        <tr>
            <td>Task Point :</td>
            <td>{task?.taskPoing}</td>
        </tr>
        <tr>
            <td>Envoirment :</td>
            <td>{task?.taskID}</td>
        </tr>
    </table>
</div>
        </div>

        <div class="task-desc">
            <h2>Description</h2>
            <p>{task?.taskDescription}</p>
        </div>
        <div class="activity">
            <h2>All Comments</h2>
            <p>There are no comments yet on this issue.</p>
            <div class="comments">
                <input type="text" placeholder="Add a comment..."/>
                <button>Submit</button>
            </div>
        </div>
        <div class="right-side">
            <div class="block people">
                <h3>People</h3>
                <p>Assignee: Unassigned</p>
                <p>Reporter: Elsa Hugo</p>
                <p>Votes: 0</p>
                <p>Watchers: 2</p>
            </div>
            <div class="block dates">
                <h3>Dates</h3>
                <p>Created: 2 hours ago</p>
                <p>Updated: Just now</p>
            </div>
            <div class="block agile">
                <h3>Agile</h3>
                <p>Find on a board</p>
            </div>
        </div>
    </div>
    </>
  );
};

export default ViewTask;