import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { NODE_ENV } from '../env';
// Reducers
import simple from './simple';

const rootReducer = combineReducers({
  simple,
});

const configureStore = () => {
  return createStore(
    rootReducer,
    NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
  );
}

export default configureStore;