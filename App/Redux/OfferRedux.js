import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
    postRequestOffer: ['types', 'other', 'num'],
    postSuccessOffer: null,
    postFailureOffer: ['error'],
    getRequestOffer: ['num'],
    getSuccessOffer: ['offer'],
    getFailureOffer: ['error'],
    deleteRequestOffer: ['num'],
    deleteSuccessOffer: null,
    deleteFailureOffer: ['error'],
});
export const OfferTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
    error: null,
    fetching: false,
    offer: {type: 'test'},
});

/* ------------- Reducers ------------- */
export const postRequest = (state) => state.merge({ fetching: true });

export const postSuccess = (state) => state.merge({ error: null, fetching: false });

export const postFailure = (state, { error }) => state.merge({ error, fetching: false });

export const getRequest = (state) => state.merge({ fetching: true });

export const getSuccess = (state, { offer }) => state.merge({ offer, error: null, fetching: false });

export const getFailure = (state, { error }) => state.merge({ error, fetching: false });

export const deleteRequest = (state) => state.merge({ fetching: true });

export const deleteSuccess = (state) => state.merge({ offer: null, error: null, fetching: false });

export const deleteFailure = (state, { error }) => state.merge({ error, fetching: false });

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
    [Types.POST_REQUEST_OFFER]: postRequest,
    [Types.POST_SUCCESS_OFFER]: postSuccess,
    [Types.POST_FAILURE_OFFER]: postFailure,
    [Types.GET_REQUEST_OFFER]: getRequest,
    [Types.GET_SUCCESS_OFFER]: getSuccess,
    [Types.GET_FAILURE_OFFER]: getFailure,
    [Types.DELETE_REQUEST_OFFER]: deleteRequest,
    [Types.DELETE_SUCCESS_OFFER]: deleteSuccess,
    [Types.DELETE_FAILURE_OFFER]: deleteFailure,
});

/* ------------- Selectors ------------- */
