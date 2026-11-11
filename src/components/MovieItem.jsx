// This function imports cards
import Card from 'react-bootstrap/Card';
export default function MovieItem(props){

    return(
    <div>
     {/* Each one displays a different object uses a card to display them*/}

         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.mymovie.Poster} />
      <Card.Body>
        <Card.Title>{props.mymovie.Title}</Card.Title>
        <Card.Text>
            {props.mymovie.Year}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    )
}