import React from 'react';
import {Card, Col, Row} from 'react-bootstrap';

export default React.memo((props) => {
    return (
        <Row>
            <Col>
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
            </Col>
        </Row>
    );
});
