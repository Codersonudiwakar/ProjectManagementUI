import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function LeftSide() {
  return (
<div>
<Card className='card-menu'>
      <div className='project-name'>
        <p><a href='/'> Project Name</a></p>
      </div>
    </Card>
    <Card className='card-menu'>
    <ListGroup className='card-menu-li'>
    <ListGroup.Item className='card-menu-li'><a href='/'>Dashboard</a></ListGroup.Item>
      <ListGroup.Item className='card-menu-li'><a href='/all-open-issue'>All Open Issue</a></ListGroup.Item>
      <ListGroup.Item className='card-menu-li'><a href='/my-task'>My Tasks</a></ListGroup.Item>
      <ListGroup.Item className='card-menu-li'><a href='/closed-tasks'>Closed Issue</a></ListGroup.Item>
      <ListGroup.Item className='card-menu-li'><a href='/chat'>Chat</a></ListGroup.Item>
      <ListGroup.Item className='card-menu-li'><a href='/'>Help</a></ListGroup.Item>
      {/* <ListGroup.Item className='card-menu-li'><a href='/'></a></ListGroup.Item>
      <ListGroup.Item className='card-menu-li'><a href='/'></a></ListGroup.Item>   */}
    </ListGroup>
    </Card>
</div>
  );
}

export default LeftSide;