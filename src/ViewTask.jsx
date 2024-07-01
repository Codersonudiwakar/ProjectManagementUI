// src/App.js
import React, { useState } from 'react';
import './style.css';
import Card from 'react-bootstrap/Card';
import { myAxios } from './service/service';
import { ToastContainer, toast } from 'react-toastify';

const ViewTask  = () => {  
  const [tableData, setTableData] = useState([]);

  return (
<>
<div className="main-card">
            <h2>Create New Task</h2>
            <div className="inner-card">
                <Card className="text-center">
                    <Card.Body>
                        <h1>Sonu kumar diwa</h1>
                    </Card.Body>
                </Card>
            </div>
        </div>



</>
  );
};

export default ViewTask ;
