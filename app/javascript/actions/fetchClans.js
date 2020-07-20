import { FETCH_CLANS } from './../constants';
import { createAction } from 'redux-actions';
import { apiGet } from '../api';
import { urlClanIndex } from '../api/urls';

export const fetchClans = createAction(FETCH_CLANS, apiGet(urlClanIndex));