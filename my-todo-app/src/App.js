import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Tab } from 'react-bootstrap';
import AddTodoForm from './AddTodoForm'; // Import the AddTodoForm component
import todoItems from './todoItems'; // Import static todo items

const App = () => {
  // State to manage the list of ToDo items
  const [todos, setTodos] = useState(todoItems);
  const [activeKey, setActiveKey] = useState(todos[0]?.title || '');

  // Function to add new ToDo item
  const addNewTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  // Function to determine color based on due date
  const getVariant = (dueDate) => {
    const due = new Date(dueDate);
    const now = new Date();
    const timeDiff = Math.ceil((due - now) / (1000 * 60 * 60 * 24)); // days

    if (timeDiff > 7) return 'primary';
    if (timeDiff <= 7 && timeDiff > 4) return 'success';
    if (timeDiff <= 4 && timeDiff > 2) return 'warning';
    return 'danger';
  };

  return (
    <Container>
      <h1>Assignment 2: Hardik Panchal ToDo List</h1>

      {/* Form to add a new ToDo item */}
      <Row className="mb-4">
        <Col>
          <AddTodoForm addNewTodo={addNewTodo} />
        </Col>
      </Row>

      <Row>
        <Col sm={4}>
          <ListGroup>
            {todos.map((item) => (
              <ListGroup.Item
                key={item.title}
                action
                href={`#${item.title}`}
                eventKey={item.title}
                variant={getVariant(item.dueDate)}
                onClick={() => setActiveKey(item.title)}
              >
                {item.title}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Container activeKey={activeKey}>
            <Tab.Content>
              {todos.map((item) => (
                <Tab.Pane key={item.title} eventKey={item.title}>
                  <h4>{item.title}</h4>
                  <p contentEditable="true">{item.description}</p>
                  <input type="date" defaultValue={item.dueDate} />
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
