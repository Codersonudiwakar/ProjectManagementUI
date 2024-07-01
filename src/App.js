import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style.css';
import TopHeader from './TopHeader';
import HomePage from './Home';
import AllOpenIssue from './AllOpenIssue';
import HighPriorityIssue from './HighPriorityIssue';
import PrivateRoutes from './PrivateRoute';
import LeftSide from './LeftSide';
import './tablulatorStyle.css';
import LoginForm from './LoginForm';
import MediumPriorityIssue from './MediumPriorityIssue';
import CreateTask from './CreateTask';
import RegistrationForm from './CreateTask';
import Modal from 'react-modal';
import { useState } from 'react';
import ChatScreen from './ChatScreen';
import LowPriorityIssue from './LowPriorityIssue';
import MyTask from './MyTask';
import ClosedTask from './ClosedTask';
import { ToastContainer } from 'react-toastify';
import AllClosedIssue from './AllClosedTask';
import ViewTask from './ViewTask';

const App=()=> {

  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
           <Route path="/login" element={<LoginForm/>} />
          {/* <Route path="/open-account" element={<RegistrationPage />} /> */}
        </Routes>

          <TopHeader />
    <div className="home-page">
      <ToastContainer/>
      
      <div className="content-container">
        <div className="side-section">
          <aside>
           <LeftSide />
          </aside>
        </div>
        <div className="main-section"> 
          <main className="main-content">
          <Routes>
              <Route element={<PrivateRoutes />}>
              <Route path={`/`} element={<HomePage/>} />
                <Route path={`/all-open-issue`} element={<AllOpenIssue/>} />
                <Route path={`/high-priority-issue`} element={<HighPriorityIssue/>} />
                <Route path={`/medium-priority-issue`} element={<MediumPriorityIssue/>} />
                <Route path={`/low-priority-issue`} element={<LowPriorityIssue/>} />
                <Route path={`/my-task`} element={<MyTask/>} />
                <Route path={`/closed-tasks`} element={<AllClosedIssue/>} />
                <Route path={`/chat`} element={<ChatScreen/>} />
                <Route path={`/view`} element={<ViewTask/>} />
                
                {/* <Route path={`/medium-priority-issue`} element={<Accountinfo />}  exact/>
                <Route path={`/low-priority-issue`} element={<FuntTransfer/>} />
                <Route path={`/closed-issue`} element={<ViewCard />} /> 
                <Route path={`/my-task`} element={<ViewCard />} />
                <Route path={`/my-task`} element={<ViewCard />} />
                <Route path={`/my-task`} element={<ViewCard />} />
                */}
              </Route>
            </Routes>
          </main>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 My Homepage. All rights reserved.</p>
      </footer>
    </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
