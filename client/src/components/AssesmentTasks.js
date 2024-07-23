import React, { Component } from 'react';
import { Container, Stack, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Notes from './Notes';

export default class AssesmentTasks extends Component {
  render() {
    const { isAuthenticated } = this.props;

    return (
      <div>
        <Container fluid className="p-4">
          <Stack direction="horizontal" gap={2}>
            {!isAuthenticated ? (
              <>
                <Button as={Link} to="/login" variant="primary">
                  Login
                </Button>
                <Button as={Link} to="/register" variant="success">
                  Register
                </Button>
              </>
            ) : (
              <Button as={Link} to="/notes" variant="primary" className="d-none">
                View Notes
              </Button>
            )}
          </Stack>
        </Container>

        {/* Render Notes component only if authenticated */}
        {isAuthenticated && <Notes />}
      </div>
    );
  }
}
