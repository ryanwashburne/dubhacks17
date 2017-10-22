import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'

/* ------------- Types ------------- */

/* ------------- Sagas ------------- */

/* ------------- API ------------- */
const api = API.create()

/* ------------- Connect Types To Sagas ------------- */
export default function * root () {
    yield all([
        // takeLatest(LoginTypes.LOGIN_REQUEST, login, api),
        // takeLatest(ScannerTypes.SCANNER_REQUEST, scan, api),
    ]);
};
