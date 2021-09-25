import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserCard = ({user}) => {
    return (
        <Card style={{ width: '18rem' }} className="d-flex justify-content-center my-3 mx-2">
          <div className="avatar mx-auto mt-2">
              {user.name[0]}
          </div>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>
            {user.email}
          </Card.Text>
          <Link to={`/users/${user.id}`}><Button variant="primary">view detail</Button></Link>
        </Card.Body>
      </Card>
    )
}

export default UserCard
