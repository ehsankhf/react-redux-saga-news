import {put, takeLatest, all, call} from 'redux-saga/effects';
import API from "../shared/API/API";

function* fetchArticles({payload: {sources}}) {
    yield put({type: "LOADING"});
    const articles = yield call(API.getArticles, sources);
    yield put({type: "RECEIVED_NEWS", articles});
    yield put({type: "LOADED"});
}

function* fetchHeadlines(payload) {
    yield put({type: "LOADING"});
    const articles = yield call(API.getHeadlines);
    yield put({type: "RECEIVED_NEWS", articles});
    yield put({type: "LOADED"});
}

function* fetchSources() {
    yield put({type: "LOADING"});
    const sourcesList = yield call(API.getSourcesList);
    yield put({type: "RECEIVED_SOURCES", sourcesList});
    yield put({type: "LOADED"});
}

function* getArticlesWatcher() {
    yield takeLatest('GET_ARTICLES', fetchArticles);
}

function* getHeadlinesWatcher() {
    yield takeLatest('GET_HEADLINES', fetchHeadlines);
}

function* getSourcesWatcher() {
    yield takeLatest('GET_SOURCES', fetchSources);
}

export default function* rootSaga() {
    yield all([
        getArticlesWatcher(),
        getHeadlinesWatcher(),
        getSourcesWatcher()
    ]);
}
