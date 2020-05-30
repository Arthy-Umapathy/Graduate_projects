import React from 'react';
import  { Card }  from "react-bootstrap"

const CardComponent = (props) => {
    // Using Props object to display access recipeName attribute to show recipe Name 
    // Image is fetched from assets folder 
    return ( 
        <Card>
            <Card.Img varient="top" src={require(``)} />
            <Card.Body>
                <Card.Title>{props.recipeName}</Card.Title>
                <Card.Text>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
 
export default CardComponent;
