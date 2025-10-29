import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// useNavigate() : It's a React Router hook used to navigate programmatically between "pages" — like redirecting a user after login, form submit, or button click — without using <Link> or <NavLink>.

const MemeCard = (props) => {
  const navigate = useNavigate();
  return (
    <Card style={{ width: '18rem', margin: "25px" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button onClick={e => navigate(`/edit?url=${props.img}`)} variant="primary">Edit</Button>
        {/* using navigate we send the img's url to query parameter*/}
      </Card.Body>
    </Card>
  );
};

export default MemeCard;
