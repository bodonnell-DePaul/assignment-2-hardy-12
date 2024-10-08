import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddTodoForm = ({ addNewTodo }) => {
  const [newTitle, setNewTitle] = useState('');
  const [newDueDate, setNewDueDate] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTitle || !newDueDate) return; // Prevent empty fields
    
    // Call the parent function to add the new ToDo item
    addNewTodo({
      title: newTitle,
      description: newDescription || 'No description provided',
      dueDate: newDueDate,
    });

    // Clear the input fields
    setNewTitle('');
    setNewDueDate('');
    setNewDescription('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTodoTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter title" 
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)} 
          required
        />
      </Form.Group>

      <Form.Group controlId="formTodoDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formDueDate">
        <Form.Label>Due Date</Form.Label>
        <Form.Control 
          type="date" 
          value={newDueDate}
          onChange={(e) => setNewDueDate(e.target.value)} 
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add ToDo
      </Button>
    </Form>
  );
};

export default AddTodoForm;

