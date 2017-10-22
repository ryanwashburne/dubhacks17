import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../Sagas/';

export default () => {
    const rootReducer = combineReducers({
        nav: require('./NavigationRedux').reducer,
        welcome: require('./WelcomeRedux').reducer,
        // scanner: require('./ScannerRedux').reducer,
    });

    return configureStore(rootReducer, rootSaga);
};
