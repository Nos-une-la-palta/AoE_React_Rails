import { combineReducers } from 'redux';
import { players } from './players';
import { news } from './news'
import { twitches } from './twitches'

export default combineReducers({
    players,
    news,
    twitches
});