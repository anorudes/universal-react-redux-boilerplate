import { combineReducers } from 'redux';
import { reducer as idle } from 'redux-promises';

import articles from './articles';

const reducer = combineReducers({
  idle,
  router,
  articles
});

export default reducer;
