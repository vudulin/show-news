import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import { getNews } from "../reducers"

// const reducers = combineReducers({
//   news: getNews
// })
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(getNews, composeEnhancers(applyMiddleware(thunk,logger)))

window.store = store;

export default store;