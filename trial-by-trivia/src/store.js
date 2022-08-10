import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { mainReducer , questionReducer, answerReducer, responseReducer, timeReducer} from './reducers';

const store = createStore(combineReducers({mainReducer, questionReducer, answerReducer, responseReducer, timeReducer}), composeWithDevTools(applyMiddleware(thunk)));


export default store;
