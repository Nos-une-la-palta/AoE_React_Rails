import { handleActions } from 'redux-actions';
import { FETCH_PLAYERS } from './../constants/index';

export const players = handleActions({
    [FETCH_PLAYERS]: (state, action) => [...action.payload.leaderboard],
}, []);


