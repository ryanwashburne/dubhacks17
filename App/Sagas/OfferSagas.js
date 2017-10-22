import { call, put } from 'redux-saga/effects';
import OfferActions from '../Redux/HomeRedux';
import HomeActions from '../Redux/HomeRedux';

export function * postOffer (api, action) {
    const { num } = action;
    const response = yield call(api.postOffer, num);

    // yield put(OfferActions.postSuccess());
    yield put(HomeActions.changeStatus());

    // if (response.ok) {
    //     yield put(OfferActions.postSuccess({...types, other: other, status: 'Pending'}));
    // } else {
    //     yield put(OfferActions.postFailure('Failed request'));
    // }
}

export function * getOffers (api, action) {
    const { num } = action;
    const response = yield call(api.getOffers, num);

    yield put(OfferActions.getSuccess({type: 'test2', time: '4pm'}));

    // if (response.ok) {
    //     yield put(OfferActions.getSuccess({...response.data}));
    // } else {
    //     yield put(OfferActions.getFailure('Failed query'));
    // }
}

export function * deleteOffer (api, action) {
    const { num } = action;
    const response = yield call(api.deleteOffer, num);

    yield put(OfferActions.deleteSuccess());

    // if (response.ok) {
    //     yield put(OfferActions.deleteSuccess({type: 'test'}));
    // } else {
    //     yield put(OfferActions.deleteFailure('Failed deletion'));
    // }
}
