import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { myAxios } from './service/service';

const ViewTask = ({options}) => {
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

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    alert(`Selected: ${option}`);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
   <>
   <div class="container">
        <div class="header">
            <h1>Landing on Mars</h1>
            <button><div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search..."
      />
      <ul>
        {filteredOptions.map((option) => (
          <li key={option}>
            <button onClick={() => handleSelect(option)}>{option}</button>
          </li>
        ))}
      </ul>
      {selectedOption && <p>Selected Option: {selectedOption}</p>}
    </div></button>
            <button>To Do</button>
            <button>To Do</button>
            <button>To Do</button>
            <button>To Do</button>
            <button>To Do</button>
        </div>
        <div class="details">
            <h2>Details</h2>
            <p>Type: <strong>Story</strong></p>
            <p>Priority: <strong>Medium</strong></p>
            <p>Labels: <strong>None</strong></p>
            <p>Description: Identify a safe landing spot.</p>
        </div>
        <div class="activity">
            <h2>Activity</h2>
            <span>All</span>
            <span>Comments</span>
            <span>Work Log</span>
            <span>History</span>
            <span>Activity</span>
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
