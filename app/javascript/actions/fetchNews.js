import { FETCH_NEWS } from './../constants';
import { createAction } from 'redux-actions';
import { apiGet } from '../api';
import { urlNewsIndex } from '../api/urls';

export const fetchNews = createAction(FETCH_NEWS, apiGet(urlNewsIndex));