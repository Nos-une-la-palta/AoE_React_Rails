import { handleActions } from 'redux-actions';
import { FETCH_CLANS } from './../constants';

export const clans = handleActions({
    [FETCH_CLANS]: (state, action) => [...action.payload.data]
}, []);