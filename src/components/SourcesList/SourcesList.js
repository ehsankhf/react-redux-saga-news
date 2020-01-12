import React, {useState} from 'react';
import {Col, Dropdown, Row} from 'react-bootstrap';

import './SourcesList.scss';
// import {connect} from "react-redux";

export const SourcesList = ({sourcesList = [], getArticles}) => {
    const [currentSource, setSource] = useState({name: 'All', id: '*'});
    const onSelect = source => (eventKey, event) => [setSource(source), getArticles(source.id)];

    const renderItems = sourcesList => [{name: 'All', id: ''}, ...sourcesList].map(source => (
        <Dropdown.Item onSelect={onSelect(source)} eventKey={source.id} key={source.id}>{source.name}</Dropdown.Item>));

    return (
        <Row className='sources-list'>
            <Col xs={1} className={'sources-list__label'}>Source:</Col>
            <Col>
                <Dropdown className='sources-list__dropdown'>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {currentSource.name}
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='sources-list__dropdown__menu'>
                        {renderItems(sourcesList)}
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
        </Row>
    );
};
