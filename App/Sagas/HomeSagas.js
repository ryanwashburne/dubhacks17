import { call, put } from 'redux-saga/effects';
import HomeActions from '../Redux/HomeRedux';

export function * postAppointment (api, action) {
    const { types, other, num } = action;
    const response = yield call(api.postAppointment, types, other);

    yield put(HomeActions.postSuccess({type: [...types], status: 'Pending'}));

    // if (response.ok) {
    //     yield put(HomeActions.postSuccess({...types, other: other, status: 'Pending'}));
    // } else {
    //     yield put(HomeActions.postFailure('Failed request'));
    // }
}

export function * getAppointment (api, action) {
    const { num } = action;
    const response = yield call(api.getAppointment, num);

    yield put(HomeActions.getSuccess({type: 'test2'}));

    // if (response.ok) {
    //     yield put(HomeActions.getSuccess({...response.data}));
    // } else {
    //     yield put(HomeActions.getFailure('Failed query'));
    // }
}

export function * deleteAppointment (api, action) {
    const { num } = action;
    const response = yield call(api.deleteAppointment, num);

    yield put(HomeActions.deleteSuccess());

    // if (response.ok) {
    //     yield put(HomeActions.deleteSuccess({type: 'test'}));
    // } else {
    //     yield put(HomeActions.deleteFailure('Failed deletion'));
    // }
}
