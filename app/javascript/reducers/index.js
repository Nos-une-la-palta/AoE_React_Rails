import { combineReducers } from 'redux';
import { players } from './players';
import { news } from './news'

export default combineReducers({
    players,
    news
});