import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import reducer from './reducer';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = process.env.NODE_ENV.includes('dev') ? [sagaMiddleware, logger] : [sagaMiddleware];

const store = createStore(
    reducer,
    applyMiddleware(...middlewares),
);
sagaMiddleware.run(sagas);

export default store;
