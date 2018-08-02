// @flow

import { router } from '../navigations';

/**
 * TYPES
 */

export default function navigationReducer() {
  const newState = router.getStateForAction(action, state);
  return newState || state;
}
