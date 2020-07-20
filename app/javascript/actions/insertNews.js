import { INSERT_NEWS } from './../constants';
import { createAction } from 'redux-actions';
import { apiPost } from '../api';
import { urlNewsIndex } from '../api/urls';

export const insertNews = createAction(INSERT_NEWS,
    news => apiPost(urlNewsIndex, news)() );