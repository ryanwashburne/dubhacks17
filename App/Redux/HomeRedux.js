import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
    postRequest: ['types', 'other', 'num'],
    postSuccess: ['appointment'],
    postFailure: ['error'],
    getRequest: ['num'],
    getSuccess: ['appointment'],
    getFailure: ['error'],
    deleteRequest: ['num'],
    deleteSuccess: null,
    deleteFailure: ['error'],
});
export const HomeTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
    error: null,
    fetching: false,
    appointment: null,
});

/* ------------- Reducers ------------- */
export const postRequest = (state) => state.merge({ fetching: true });

export const postSuccess = (state, { appointment }) => state.merge({ appointment, error: null, fetching: false });

export const postFailure = (state, { error }) => state.merge({ error, fetching: false });

export const getRequest = (state) => state.merge({ fetching: true });

export const getSuccess = (state, { appointment }) => state.merge({ appointment, error: null, fetching: false });

export const getFailure = (state, { error }) => state.merge({ error, fetching: false });

export const deleteRequest = (state) => state.merge({ fetching: true });

export const deleteSuccess = (state) => state.merge({ appointment: null, error: null, fetching: false });

export const deleteFailure = (state, { error }) => state.merge({ error, fetching: false });

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
    [Types.POST_REQUEST]: postRequest,
    [Types.POST_SUCCESS]: postSuccess,
    [Types.POST_FAILURE]: postFailure,
    [Types.GET_REQUEST]: getRequest,
    [Types.GET_SUCCESS]: getSuccess,
    [Types.GET_FAILURE]: getFailure,
    [Types.DELETE_REQUEST]: deleteRequest,
    [Types.DELETE_SUCCESS]: deleteSuccess,
    [Types.DELETE_FAILURE]: deleteFailure,
});

/* ------------- Selectors ------------- */
