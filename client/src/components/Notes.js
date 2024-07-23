import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, ListGroup, Alert } from 'react-bootstrap';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotes = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/notes', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setNotes(response.data);
      } catch (error) {
        setError('Failed to fetch notes');
      }
    };
    fetchNotes();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post('http://localhost:5000/notes', { title, content }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      // Update the notes list after adding a new note
      const response = await axios.get('http://localhost:5000/notes', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setNotes(response.data);
      setTitle('');
      setContent('');
      setError(null);
    } catch (error) {
      setError('Failed to create note');
    }
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('No token found');
      return;
    }
    try {
      await axios.delete(`http://localhost:5000/notes/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      // Update the notes list after deleting a note
      setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
    } catch (error) {
      console.error('Failed to delete note:', error.response ? error.response.data : error.message);
      alert('Failed to delete note');
    }
  };

  return (
    <Container>
      <h2 className="my-4">Assessments</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit} className="mb-4">
        <Form.Group controlId="formNoteTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formNoteContent" className="mt-3">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Add Note
        </Button>
      </Form>
      <ListGroup>
        {notes.map(note => (
          <ListGroup.Item key={note.id} className="d-flex justify-content-between align-items-center">
            <div>
              <h4>{note.title}</h4>
              <p>{note.content}</p>
            </div>
            <Button
              variant="danger"
              onClick={() => handleDelete(note.id)}
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Notes;
