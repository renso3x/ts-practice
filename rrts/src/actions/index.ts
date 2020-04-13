import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// Generic dispatch function
interface FetchTodosAction {
  type: ActionTypes.fetchTodos,
  payload: Todo[]
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    // type anotate the return from the request : Array of Todo's
    const response = await axios.get<Todo[]>(url);

    // describe on what to dispatch
    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data
    })
  }
}