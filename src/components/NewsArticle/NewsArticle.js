import React from 'react';
import {Card} from 'react-bootstrap';

export default (props) => {
    return (
        <Card className='news-article'>
            <Card.Body>
                <Card.Title>
                    {props.title}
                </Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
