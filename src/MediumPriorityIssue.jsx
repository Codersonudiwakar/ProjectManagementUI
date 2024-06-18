// src/App.js
import React, { useEffect, useState } from 'react';
import 'tabulator-tables/dist/css/tabulator.min.css';
import { ReactTabulator } from 'react-tabulator';
import 'react-tabulator/lib/styles.css';
import { myAxios } from './service/service';


const options = {
  pagination: "local",
  paginationSize: 10,
  paginationSizeSelector: [10, 20, 50],
  layout: "fitDataFill ",
};

const MediumPriorityIssue  = () => {  
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Replace 'your-api-endpoint' with the actual endpoint from where you are fetching the data
    myAxios.get('/getMediumTasks')
      .then(response => {
        // Assuming response.data is the array of data
        setTableData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const columns = [
    { title: 'Task ID', field: 'taskID', sorter: 'number', headerFilter: 'input' },
    { title: 'Title', field: 'taskTitle', sorter: 'string', headerFilter: 'input' },
    { title: 'Status', field: 'currentStatus', sorter: 'string', headerFilter: 'input' },
    { title: 'Created By', field: 'reporterUser', sorter: 'string', headerFilter: 'input' },
    { title: 'Created Date', field: 'createdDate', sorter: 'timestamp', headerFilter: 'input' },
    { title: 'Assign To', field: 'assignedUser', sorter: 'string', headerFilter: 'input' },
    { title: 'Actions', field: 'actions', formatter: (cell, formatterParams, onRendered) => {
      return "<button>View</button>";
    }},
  ];
 


  return (
 
      <ReactTabulator
        data={tableData}
        columns={columns}
        options={options}
        layout="fitDataFill"
      />
  );
};

export default MediumPriorityIssue;
