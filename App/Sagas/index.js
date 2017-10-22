import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'

/* ------------- Types ------------- */
import { HomeTypes } from '../Redux/HomeRedux';
import { OfferTypes } from '../Redux/OfferRedux';

/* ------------- Sagas ------------- */
import { postAppointment, getAppointment, deleteAppointment } from './HomeSagas';
import { postOffer, getOffers, deleteOffer } from './OfferSagas';

/* ------------- API ------------- */
const api = API.create()

/* ------------- Connect Types To Sagas ------------- */
export default function * root () {
    yield all([
        takeLatest(HomeTypes.POST_REQUEST, postAppointment, api),
        takeLatest(HomeTypes.GET_REQUEST, getAppointment, api),
        takeLatest(HomeTypes.DELETE_REQUEST, deleteAppointment, api),

        takeLatest(OfferTypes.POST_REQUEST_OFFER, postOffer, api),
        takeLatest(OfferTypes.GET_REQUEST_OFFER, getOffers, api),
        takeLatest(OfferTypes.DELETE_REQUEST_OFFER, deleteOffer, api),
    ]);
};
