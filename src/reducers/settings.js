import { SET_THEME } from '../actions';

import { themes } from '../utils/constants';

const initialState = { theme: themes.dark };
const toggleTheme = payload => themes[payload.theme];
export default (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
  case SET_THEME:
    return toggleTheme(action.payload);
  default:
    return toggleTheme({ theme: 'dark' });
  }
};
