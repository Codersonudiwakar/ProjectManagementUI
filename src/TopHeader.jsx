import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Modal from 'react-modal';
import RegistrationForm from './CreateTask';
import { FaRegUserCircle } from "react-icons/fa";


const TopHeader=()=> {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <Navbar expand="lg" className="custom-navbar">
       <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Registration Form"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <RegistrationForm closeModal={closeModal} />
        <button className="modal-close-button" onClick={closeModal}>Close</button>
      </Modal>
      <Container fluid>
        <Navbar.Brand href="/"><div class="logo">
        <div class="logo-text">Project</div>
        <div class="logo-subtext">Craft</div>
    </div></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '80px' }}
            navbarScroll
          >
            {/* <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link> */}
            {/* <NavDropdown title="People" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
            </NavDropdown> */}
            <NavDropdown title="Project" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">
                Project Name
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Task" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/high-priority-issue">High Priority Issue</NavDropdown.Item>
              <NavDropdown.Item href="/medium-priority-issue">
              Medium Priority Issue
              </NavDropdown.Item>
              <NavDropdown.Item href="/low-priority-issue">
              Low Priority Issue
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">Link</Nav.Link>{''}
            <Button variant="primary" onClick={openModal}>Create</Button>{' '}
          </Nav>
          <Form className="d-flex">
          
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <div className='user-icon'>
          <FaRegUserCircle />
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopHeader;