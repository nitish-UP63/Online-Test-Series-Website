import React from 'react';
import "./templet.css"
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import HomeCategory from './HomeCategory';
import { Link } from '@mui/material';
// import Jeelogo from "../Images/jeelogo.jpg"

function homeCategoryClicked(){

}


export default function Templet(props) {
    return (
        <Card className="customcard" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} width="400" height="225" />
            <Card.Body>
                <Button onClick={homeCategoryClicked} clasName="btn" variant="outline-primary" size="lg">{props.title}</Button>
            </Card.Body>
        </Card>
    );
}
