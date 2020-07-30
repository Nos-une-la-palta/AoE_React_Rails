import { INSERT_CLANS } from './../constants';
import { createAction } from 'redux-actions';
import { apiPost } from '../api';
import { urlClanIndex } from '../api/urls';

export const insertClans = createAction(INSERT_CLANS,
    (clans) => apiPost(urlClanIndex, clans)() );