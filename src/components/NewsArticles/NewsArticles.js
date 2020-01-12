import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Container} from 'react-bootstrap';
import {getArticles, getHeadlines} from "../../state/actionCreators";
import NewsArticle from "../NewsArticle/NewsArticle";

const NewsArticles = ({articles, type, getHeadlines, getArticles, sources}) => {
    useEffect(() => {
        if (type === 'head-news') {
            getHeadlines();
        } else {
            getArticles(sources);
        }
    }, [type]);

    const renderArticles = () => {
        return (articles || []).map(({urlToImage, title, url, description, source}) => (
            <NewsArticle urlToImage={urlToImage} title={title} description={description} key={url+source.id}/>)
        );
    };

    return (
        <Container className='news-articles'>
            {renderArticles()}
        </Container>
    );
};

const mapDispatchToProps = {
    getArticles: getArticles,
    getHeadlines: getHeadlines
};

function mapStateToProps({articles}) {
    return {articles}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsArticles);


