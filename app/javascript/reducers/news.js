import { handleActions } from 'redux-actions';
import { FETCH_NEWS } from './../constants';

export const news = handleActions({
    [FETCH_NEWS]: (state, action) => [...action.payload.data]
}, []);