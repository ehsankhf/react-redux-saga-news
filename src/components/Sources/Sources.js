import React, {useEffect} from 'react';
import {Container} from 'react-bootstrap';
import {getSources} from "../../state/actionCreators";
import {connect} from "react-redux";
import Source from "../Source/Source";
import Loader from "../../shared/Loader/Loader";

const Sources = ({sourcesList, getSources, loading}) => {
    useEffect(() => {
        if (!sourcesList || !sourcesList.length) {
            getSources()
        }
    }, []);

    const renderSources = () => {
        return (sourcesList || []).map(({id, name}) => (
            <Source name={name} key={id}/>)
        );
    };

    return loading ? <Loader/> : (
        <Container className='sources'>
            {renderSources()}
        </Container>
    );
}

const mapDispatchToProps = {
    getSources
};

function mapStateToProps({sourcesList, loading}) {
    return {sourcesList, loading}
}

export default connect(mapStateToProps, mapDispatchToProps)(Sources);
