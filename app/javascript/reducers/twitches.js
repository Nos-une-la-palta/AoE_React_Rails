import { handleActions } from 'redux-actions';
import { FETCH_TWITCHES} from './../constants';

export const twitches = handleActions({
    [FETCH_TWITCHES]: (state, action) => [...action.payload.data]
}, []);