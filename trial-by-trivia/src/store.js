import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { mainReducer , questionReducer} from './reducers';

const store = createStore(combineReducers({mainReducer, questionReducer}), composeWithDevTools(applyMiddleware(thunk)));


export default store;
