
import {createStore,applyMiddleware} from 'redux';
import { Reducer } from './reducer';
import thunk from 'redux-thunk';




export const myStore = createStore(Reducer,applyMiddleware(thunk));