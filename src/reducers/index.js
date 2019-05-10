import { combineReducers } from 'redux';
import groupReducers from './groupReducers';
import modalReducer from './modalReducer';
import todoReducers from './todoReducers';

const reducers = combineReducers({
    groupReducers,
    modalReducer,
    todoReducers
});

export default reducers;