import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
    submitPhone: ['phone'],
    loginRequest: ['email', 'password'],
    loginSuccess: null,
    loginFailure: ['error'],
    logoutRequest: null,
});
export const WelcomeTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
    success: null,
    error: null,
    fetching: false
});

/* ------------- Reducers ------------- */
export const submitPhone = (state) => INITIAL_STATE;

export const request = (state) => state.merge({ fetching: true });

export const success = (state) => state.merge({ success: true, error: null, fetching: false });

export const failure = (state, { error }) => state.merge({ error, fetching: false });

export const logout = (state) => INITIAL_STATE;

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
    [Types.SUBMIT_PHONE]: submitPhone,
    [Types.LOGIN_REQUEST]: request,
    [Types.LOGIN_SUCCESS]: success,
    [Types.LOGIN_FAILURE]: failure,
    [Types.LOGOUT_REQUEST]: logout
});

/* ------------- Selectors ------------- */
