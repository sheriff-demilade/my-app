import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="/cardImage.jpg" />
      <Card.Body>
        <Card.Title>Card</Card.Title>
        <Card.Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora quia
          fuga placeat.
        </Card.Text>
        <Button variant="primary">Button</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
