import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Container} from 'react-bootstrap';

import {getArticles, getHeadlines, getSources} from "../../state/actionCreators";
import NewsArticle from "../NewsArticle/NewsArticle";
import {SourcesList} from "../SourcesList/SourcesList";
import Loader from "../../shared/Loader/Loader";

const NewsArticles = ({sources, sourcesList, articles, type, getHeadlines, getArticles, getSources, loading}) => {
    useEffect(() => {
        if (Array.isArray(sourcesList) && !sourcesList.length) {
            getSources();
        }

        if (type === 'head-news') {
            getHeadlines();
        } else {
            getArticles(sources);
        }
    }, [type]);

    const renderArticles = () => {
        return (articles || []).map(({urlToImage, title, url, description, source}) => (
            <NewsArticle urlToImage={urlToImage} title={title} description={description} key={url + source.id}/>)
        );
    };

    return loading ? <Loader/> : (
        <Container className='news-articles'>
            {type !== 'head-news' && <SourcesList {...{sourcesList, getArticles}}/>}
            {renderArticles()}
        </Container>
    );
};

const mapDispatchToProps = {
    getArticles: getArticles,
    getHeadlines: getHeadlines,
    getSources: getSources
};

function mapStateToProps({articles, sourcesList, loading}) {
    return {articles, sourcesList, loading}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsArticles);


