import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style.css';
import TopHeader from './TopHeader';
import HomePage from './Home';
import AllOpenIssue from './AllOpenIssue';
import HighPriorityIssue from './HighPriorityIssue';
import PrivateRoutes from './PrivateRoute';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/open-account" element={<RegistrationPage />} /> */}
        </Routes>
        <div className="split-container">
          <div className="left">
            <Routes>
              <Route element={<PrivateRoutes/>}>
                
            
              </Route>
            </Routes>
          </div>
          <div className="middle">
            <Routes>
              <Route element={<PrivateRoutes />}>
               
              </Route>
            </Routes>
          </div>
          <div class="right">
          <Routes>
              <Route element={<PrivateRoutes/>}>
              
              </Route>
            </Routes>
          
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
