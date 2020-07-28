import { combineReducers } from 'redux';
import { players } from './players';
import { news } from './news'
import { twitches } from './twitches'
import { clans } from './clans'
import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
    players,
    news,
    twitches,
    clans,
    form: reduxForm
});