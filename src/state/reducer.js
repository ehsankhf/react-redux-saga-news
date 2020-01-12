const defaultState = {loading: false, sourcesList: []};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'LOADING':
            return {...state, loading: true};
        case 'LOADED':
            return {...state, loading: false};
        case 'RECEIVED_NEWS':
            return {...state, articles: action.articles};
        case 'RECEIVED_SOURCES':
            return {...state, sourcesList: action.sourcesList};
        default:
            return state;
    }
};
export default reducer;
