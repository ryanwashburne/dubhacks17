import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../Sagas/';

export default () => {
    const rootReducer = combineReducers({
        nav: require('./NavigationRedux').reducer,
        home: require('./HomeRedux').reducer,
        offer: require('./OfferRedux').reducer,
    });

    return configureStore(rootReducer, rootSaga);
};
