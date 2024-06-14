// src/App.js
import React, { useState } from 'react';
import 'tabulator-tables/dist/css/tabulator.min.css';
import { ReactTabulator } from 'react-tabulator';
import 'react-tabulator/lib/styles.css';


const options = {
  pagination: "local",
  paginationSize: 10,
  paginationSizeSelector: [10, 20, 50],
  layout: "fitDataFill ",
};

const HighPriorityIssue  = () => {  
    const [data, setData] = useState([
        { id: 1, taskTitle: 'Create a new React project using create-react-app', status: "Inprogress", createdUser: 'SONU333', createdDate: "20-01-2024", assignedUser: "UTEST55", lastModified: "20-MAY-3826" },
        { id: 2, taskTitle: 'Create a new React project using create-react-app', status: "Inprogress", createdUser: 'SONU333', createdDate: "20-01-2024", assignedUser: "UTEST55", lastModified: "20-MAY-3826" },

        { id: 3, taskTitle: ' Accurate sales reports are critical for business operations', status: "Inprogress", createdUser: 'SONU333', createdDate: "20-01-2024", assignedUser: "UTEST55", lastModified: "20-MAY-3826" },
        { id: 4, taskTitle: 'Create a new React project using create-react-app', status: "Test", createdUser: 'SONU333', createdDate: "20-05-2024", assignedUser: "UTEST55", lastModified: "20-MAY-3826" },
        { id: 5, taskTitle: ' Accurate sales reports are critical for business operations', status: "Inprogress", createdUser: 'SONU333', createdDate: "20-01-2024", assignedUser: "UTEST55", lastModified: "20-MAY-3826" },
        { id: 6, taskTitle: 'Go to the e-commerce website and log in to a user account.', status: "Inprogress", createdUser: 'SONU333', createdDate: "20-01-2024", assignedUser: "UTEST55", lastModified: "20-MAY-3826" },
        { id: 7, taskTitle: 'Add multiple items to the shopping cart.', status: "Inprogress", createdUser: 'SONU333', createdDate: "20-01-2024", assignedUser: "UTEST55", lastModified: "20-MAY-3826" },
        { id: 8, taskTitle: 'Add multiple items to the shopping cart.', status: "Inprogress", createdUser: 'SONU53', createdDate: "20-01-2024", assignedUser: "UTEST55", lastModified: "20-MAY-3826" },
        { id: 9, taskTitle: 'Observe the total price displayed at the bottom of the cart', status: "Inprogress", createdUser: 'SONU333', createdDate: "20-01-2024", assignedUser: "UTEST55", lastModified: "20-MAY-3826" },
        { id: 10, taskTitle: 'The total price displayed should be the sum of the prices of all individual items in the cart.', status: "Inprogress", createdUser: 'SONU333', createdDate: "20-01-2024", assignedUser: "UTEST55", lastModified: "20-MAY-3826" },
    ]);

    const columns = [
        { title: 'Task ID', field: 'id', sorter: 'number', headerFilter: 'input' },
        { title: 'Title', field: 'taskTitle', sorter: 'string', headerFilter: 'input' },
        { title: 'Status', field: 'status', sorter: 'string', headerFilter: 'input' },
        { title: 'Created By', field: 'createdUser', sorter: 'string', headerFilter: 'input' },
        { title: 'Created Date', field: 'createdDate', sorter: 'string', headerFilter: 'input' },
        { title: 'Assign To', field: 'assignedUser', sorter: 'string', headerFilter: 'input' },
        { title: 'Actions', field: 'actions', formatter: (cell, formatterParams, onRendered) => {
          return "<button>View</button>";
        }},
      ];
  const [tableData, setTableData] = useState(data);


  return (
 
      <ReactTabulator
        data={tableData}
        columns={columns}
        options={options}
        layout="fitDataFill"
      />
  );
};

export default HighPriorityIssue ;
