import { INSERT_TWITCHES } from './../constants';
import { createAction } from 'redux-actions';
import { apiPost } from '../api';
import { urlTwitchIndex } from '../api/urls';

export const insertTwitch = createAction(INSERT_TWITCHES,
    (twitch) => apiPost(urlTwitchIndex, twitch)() );