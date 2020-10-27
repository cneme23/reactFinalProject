import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



function ItemListContainer(props){
    return (
        <div className="App">
<ReactBootStrap.CardDeck>
  <ReactBootStrap.Card>
    <ReactBootStrap.Card.Img variant="top" src={props.foto} />
    <ReactBootStrap.Card.Body>
      <ReactBootStrap.Card.Title>{props.titulo}</ReactBootStrap.Card.Title>
      <ReactBootStrap.Card.Text>
      {props.precio}
      </ReactBootStrap.Card.Text>
    </ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </ReactBootStrap.Card.Footer>
  </ReactBootStrap.Card>
  <ReactBootStrap.Card>
    <ReactBootStrap.Card.Img variant="top" src={props.foto} />
    <ReactBootStrap.Card.Body>
      <ReactBootStrap.Card.Title>{props.titulo}</ReactBootStrap.Card.Title>
      <ReactBootStrap.Card.Text>
      {props.precio}
      </ReactBootStrap.Card.Text>
    </ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </ReactBootStrap.Card.Footer>
  </ReactBootStrap.Card>
  <ReactBootStrap.Card>
    <ReactBootStrap.Card.Img variant="top" src={props.foto} />
    <ReactBootStrap.Card.Body>
      <ReactBootStrap.Card.Title>{props.titulo}</ReactBootStrap.Card.Title>
      <ReactBootStrap.Card.Text>
      {props.precio}
      </ReactBootStrap.Card.Text>
    </ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </ReactBootStrap.Card.Footer>
  </ReactBootStrap.Card>
</ReactBootStrap.CardDeck>


        </div>

    )


}
export default ItemListContainer;