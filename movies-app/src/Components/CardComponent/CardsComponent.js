import React from 'react';
import CardComponent from './CardComponent'
import { CardColumns } from "react-bootstrap"


const CardsComponent = (props) => {
    const divStyle = {
        "marginTop": "10px",
        "position": "relative",
        "marginLeft": "180px"
    }
    // The "CardComponent" is reused here and is included inside this component 
    // in order to use them multiple times 
    // Also, this component acts as an parent to "CardComponent"
    return ( 
        <div>
            <CardColumns style={divStyle}>
                <CardComponent recipeName={props.recipeName} />
                <CardComponent recipeName={props.recipeName} />
                <CardComponent recipeName={props.recipeName} />
                <CardComponent recipeName={props.recipeName} />
            </CardColumns>
        </div>
    );
}

export default CardsComponent;