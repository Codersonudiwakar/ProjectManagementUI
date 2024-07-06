import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { myAxios } from './service/service';
import Select from 'react-select';
import UserSelect from './UserSelect';

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

  return (
    <>
    <div class="container">
      <div>
      <h1>Landing on Mars</h1>
      </div>
        <div class="header">
        <button>Edit</button>
        <button>To Do</button>
        <UserSelect/>
        </div>
        
        <div class="details">   
        <h2>Details</h2>         
            <div class="table-container">
    <table>
       
        <tr>
            <td>Type :</td>
            <td>Data 2B</td>
        </tr>
        <tr>
        <td>Priority :</td>
            <td>Data 2B</td>
        </tr>
        <tr>
            <td>Envoirment :</td>
            <td>Data 3B</td>
        </tr>
    </table>
</div>
        </div>

        <div class="task-desc">
            <h2>Description</h2>
            <p>Description: Identify a safe landing spot.</p>
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