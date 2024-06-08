import React, { useState, useEffect } from 'react';
import 'react-tabulator/lib/styles.css';
import 'react-tabulator/css/bootstrap/tabulator_bootstrap.min.css';
import { ReactTabulator } from 'react-tabulator';

const HighPriorityIssue = () => {
    const [data, setData] = useState([
        { id: 1, taskTitle: 'Create a new React project using create-react-app', status: "Inprogress", createdUser: 'SONU333', createdDate: "20-01-2024", assignedUser: "UTEST55", lastModified: "20-MAY-3826" },
        { id: 2, taskTitle: 'The total sales amount in the report should match the sum of all individual transaction amounts.', status: "Inprogress", createdUser: 'SONU333', createdDate: "20-01-2024", assignedUser: "UTEST55", lastModified: "20-MAY-3826" },
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
        { title: 'Last Modified Date', field: 'lastModified', sorter: 'string', headerFilter: 'input' },
    ];

    const options = {
        pagination: 'remote',
        paginationSize: 10,
        paginationSizeSelector: [10, 20, 30, 40],
        initialSort: [{ column: 'taskTitle', dir: 'asc' }],
        layout: 'fitDataFill',
        spreadsheet:true,
        placeholder: 'No data available',
        reactiveData: true,
        renderHorizontal: "virtual",
        headerFiltered: true,
        headerFilterPlaceholder: 'Search...',
        headerFilter: true,
        headerFilterLiveFilter: true, // Enable live filtering
    };

    return (
        <div class="table-container">
        <ReactTabulator
            data={data}
            columns={columns}
            options={options}
            renderHorizontal="virtual"
            layout="fitData" // Set layout to fitDataFill for auto-size columns
        />
        </div>
    );
};

export default HighPriorityIssue;