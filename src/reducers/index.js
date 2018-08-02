import { combineReducers } from 'redux';
import settings from './settings';
import { SET_THEME } from '../actions';

const allReducers = combineReducers({
  settings
});

export default allReducers;

export const settingsTheme = payload => ({
  type: SET_THEME,
  payload
});
