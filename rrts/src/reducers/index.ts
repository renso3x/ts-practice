import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions/index';

// Validate Store structure
export interface StoreState {
  todos: Todo[];
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer
})