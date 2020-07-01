import { FETCH_TWITCHES } from './../constants';
import { createAction } from 'redux-actions';
import { apiGet } from '../api';
import { urlTwitchIndex } from '../api/urls';

export const fetchTwitches = createAction(FETCH_TWITCHES, apiGet(urlTwitchIndex));