import { createStore, applyMiddleware, compose } from 'redux'
import Config from '../Config/DebugConfig'
import createSagaMiddleware from 'redux-saga'
import ScreenTracking from './ScreenTrackingMiddleware'

export default (rootReducer, rootSaga) => {
    /* ------------- Redux Configuration ------------- */
    const middleware = [];
    const enhancers = [];

    /* ------------- Analytics Middleware ------------- */
    middleware.push(ScreenTracking);

    /* ------------- Saga Middleware ------------- */
    const sagaMonitor = Config.useReactotron ? console.tron.createSagaMonitor() : null;
    const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
    middleware.push(sagaMiddleware);

    /* ------------- Assemble Middleware ------------- */
    enhancers.push(applyMiddleware(...middleware));

    const createAppropriateStore = Config.useReactotron ? console.tron.createStore : createStore;
    const store = createAppropriateStore(rootReducer, compose(...enhancers));

    // kick off root saga
    sagaMiddleware.run(rootSaga);

    return store;
}
