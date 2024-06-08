import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function LeftSide() {
  return (
<div>
<Card className='card-menu'>
      <div className='project-name'>
        <h1>Project Name</h1>
      </div>
    </Card>
    <Card className='card-menu'>
    <ListGroup className='card-menu-li'>
      <ListGroup.Item className='card-menu-li'><a href='/all-open-issue'>All Open Issue</a></ListGroup.Item>
      <ListGroup.Item className='card-menu-li'><a href='/high-priority-issue'>High Priority Issue</a></ListGroup.Item>
      <ListGroup.Item className='card-menu-li'><a href='/medium-priority-issue'>Medium Priority Issue</a></ListGroup.Item>
      <ListGroup.Item className='card-menu-li'><a href='/low-priority-issue'>Low Priority Issue</a></ListGroup.Item>
      <ListGroup.Item className='card-menu-li'><a href='/my-task'>My Task</a></ListGroup.Item>
      <ListGroup.Item className='card-menu-li'><a href='/closed-issue'>Closed Issue</a></ListGroup.Item>
      <ListGroup.Item className='card-menu-li'><a href='/'></a></ListGroup.Item>
      <ListGroup.Item className='card-menu-li'><a href='/'></a></ListGroup.Item>  
    </ListGroup>
    </Card>
</div>
  );
}

export default LeftSide;