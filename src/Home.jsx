import React from 'react';
import TopHeader from './TopHeader';
import LeftSide from './LeftSide';
import IssueChartComponent from './IssueChartComponent';
import AllIssueChart from './AllIssueChart';
import Card from 'react-bootstrap/Card';

const HomePage = () => {
  return (
    <>
    {/* <TopHeader />
    <div className="home-page">
      
      <div className="content-container">
        <div className="side-section">
          <aside>
           <LeftSide/>
          </aside>
        </div>
        <div className="main-section">
          <header className="header">
            <h1>Welcome to My Homepage</h1>
          </header>
          <main className="main-content">
            <p>This is the main content of the homepage.</p>
          </main>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 My Homepage. All rights reserved.</p>
      </footer>
    </div> */}

    <Card className="home-card">
  <div className="home-sub-card-container">
    <Card className='home-sub-card'>
    <Card.Header><h2>Priority Based Task</h2></Card.Header>
      <IssueChartComponent />
    </Card>

    <Card className='home-sub-card'>
    <Card.Header><h2>All Task</h2></Card.Header>
      <AllIssueChart />
    </Card>
  </div>
</Card>

   
  
    </>
  );
}

export default HomePage;
