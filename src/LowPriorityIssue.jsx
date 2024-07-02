import React, { useEffect, useState } from 'react';
import 'tabulator-tables/dist/css/tabulator.min.css';
import { ReactTabulator } from 'react-tabulator';
import 'react-tabulator/lib/styles.css';
import { myAxios } from './service/service';
import { useNavigate } from 'react-router-dom';

const options = {
  pagination: "local",
  paginationSize: 10,
  paginationSizeSelector: [10, 20, 50],
  layout: "fitDataFill",
};

const MyTask = () => {
  const [tableData, setTableData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    myAxios.get('/getLowTasks')
      .then(response => {
        setTableData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleViewClick = (id) => {
    navigate(`/view/${id}`);
  };

  const columns = [
    { title: 'Task ID', field: 'taskID', sorter: 'number', headerFilter: 'input' },
    { title: 'Title', field: 'taskTitle', sorter: 'string', headerFilter: 'input' },
    { title: 'Status', field: 'currentStatus', sorter: 'string', headerFilter: 'input' },
    { title: 'Created By', field: 'reporterUser', sorter: 'string', headerFilter: 'input' },
    { title: 'Created Date', field: 'createdDate', sorter: 'timestamp', headerFilter: 'input' },
    { title: 'Assign To', field: 'assignedUser', sorter: 'string', headerFilter: 'input' },
    { title: 'Actions', field: 'actions', formatter: (cell, formatterParams, onRendered) => {
      const id = cell.getRow().getData().taskID;
      const button = document.createElement("button");
      button.innerHTML = "View";
      button.onclick = () => handleViewClick(id);
      return button;
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

export default MyTask;
