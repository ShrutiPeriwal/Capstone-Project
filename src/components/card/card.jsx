import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './card.css';

function CardComponent() {
  return (
    <CardGroup className="CardGroup">
        <Card className="Card">
        <Card.Img variant="jackets" src="https://images.pexels.com/photos/1070970/pexels-photo-1070970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Body>
          <Card.Title className="title">Jacket</Card.Title>
          <Card.Text className="text">
          Full Sleeve Solid Women Casual Jacket
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="heels" src="https://images.pexels.com/photos/1445696/pexels-photo-1445696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Body>
          <Card.Title className="title">Heels</Card.Title>
          <Card.Text className="text">
          Women Pink Heels Sandal{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="tops" src="https://images.pexels.com/photos/1449664/pexels-photo-1449664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Body>
          <Card.Title className="title">Tops</Card.Title>
          <Card.Text className="text">
          Casual Regular Sleeves Women Brown Top
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default CardComponent;