import React, { useState, useEffect } from 'react';
import 'react-tabulator/lib/styles.css';
import 'react-tabulator/css/bootstrap/tabulator_bootstrap.min.css';
import { ReactTabulator } from 'react-tabulator';

const MediumPriorityIssue = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data or generate dummy data here
    const dummyData = [];
    for (let i = 0; i < 100; i++) {
      const row = {};
      for (let j = 0; j < 20; j++) {
        row[`col${j}`] = `Row ${i}, Column ${j}`;
      }
      dummyData.push(row);
    }
    setData(dummyData);
  }, []);

  const columns = [];
  for (let i = 0; i < 20; i++) {
    columns.push({
      title: `Column ${i}`,
      field: `col${i}`,
    });
  }

  return (
    <ReactTabulator
      data={data}
      columns={columns}
      layout="fitDataStretch"
      options={{
        height: '500px',
      }}
    />
  );
};

export default MediumPriorityIssue;