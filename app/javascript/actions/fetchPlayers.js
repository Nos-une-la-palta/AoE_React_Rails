import { FETCH_PLAYERS } from './../constants';
import { createAction } from 'redux-actions';
import { apiGet } from '../api';
import { urlLaderboardRandomMap } from '../api/urls';

export const fetchPlayers = createAction(FETCH_PLAYERS, apiGet(urlLaderboardRandomMap));