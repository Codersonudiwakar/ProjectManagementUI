import React, { useState } from 'react';

const data = [
  { Name: 'John Doe', Class: '10', Sub: 'Math', Mark: 85 },
  { Name: 'Jane Doe', Class: '10', Sub: 'Science', Mark: 92 },
  // Add more records to have more than 20 for pagination
  // ...
];

const HighPriorityIssue = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 20;

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);

  const totalPages = Math.ceil(data.length / recordsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h1>Paginated Table</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Subject</th>
            <th>Mark</th>
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((record, index) => (
            <tr key={index}>
              <td>{record.Name}</td>
              <td>{record.Class}</td>
              <td>{record.Sub}</td>
              <td>{record.Mark}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default HighPriorityIssue;
