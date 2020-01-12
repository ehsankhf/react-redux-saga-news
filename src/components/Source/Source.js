import React from 'react';
import {Row, Card} from 'react-bootstrap';

export default (props) => {
    return (
        <Card className='source'>
            <Card.Body>
                <Card.Title>
                    {props.name}
                </Card.Title>
            </Card.Body>
        </Card>
    );
}
