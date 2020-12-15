import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

export const Profile = () => {
    
    const { user, isAuthenticated } = useAuth0();

    return (
        <Container className="mb-5">
            <Row className="">
                <Col md>
                    <h2>{user.name}</h2>
                    <p className="lead text-muted">{user.email}</p>
                </Col>
            </Row>
        </Container>
    )

}

export default Profile;