import { createSelector } from 'reselect';

export const getPlayers = state => state.players;

export const getChileanPlayers = createSelector(
    getPlayers,
    players => players.filter( player => player.country === 'CL')
);
