import React, {useEffect} from 'react';
import {Container} from 'react-bootstrap';
import {getSources} from "../../state/actionCreators";
import {connect} from "react-redux";
import Source from "../Source/Source";

const Sources = ({sourcesList, getSources}) => {
    useEffect(() => {
        if(!sourcesList || !sourcesList.length) {
            getSources()
        }
    }, []);

    const renderSources = () => {
        return (sourcesList || []).map(({id, name}) => (
            <Source name={name} key={id}/>)
        );
    };

    return (
        <Container className='sources'>
            {renderSources()}
        </Container>
    );
}

const mapDispatchToProps = {
    getSources
};

function mapStateToProps({sourcesList}) {
    return {sourcesList}
}

export default connect(mapStateToProps, mapDispatchToProps)(Sources);
