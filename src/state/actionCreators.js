export const getArticles = (sources = '*') => ({
    type: 'GET_ARTICLES', payload: {sources}
});
export const getHeadlines = (sources = '*') => ({
    type: 'GET_HEADLINES', payload: {sources}
});
export const getSources = () => ({
    type: 'GET_SOURCES', payload: {}
});
