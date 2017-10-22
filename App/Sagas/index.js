import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'

/* ------------- Types ------------- */
import { HomeTypes } from '../Redux/HomeRedux';

/* ------------- Sagas ------------- */
import { postAppointment, getAppointment, deleteAppointment } from './HomeSagas';

/* ------------- API ------------- */
const api = API.create()

/* ------------- Connect Types To Sagas ------------- */
export default function * root () {
    yield all([
        takeLatest(HomeTypes.POST_REQUEST, postAppointment, api),
        takeLatest(HomeTypes.GET_REQUEST, getAppointment, api),
        takeLatest(HomeTypes.DELETE_REQUEST, deleteAppointment, api),
    ]);
};
