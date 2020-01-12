import React from 'react';
import {Alert} from 'react-bootstrap';

export default React.memo((props) => {
    return (
        <Alert key={props.id} variant='success'>{props.name}</Alert>
    );
});
