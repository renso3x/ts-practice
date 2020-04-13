import { RemoveTodoAction, FetchTodosAction } from './todos';

// Action Type Enum
export enum ActionTypes {
  fetchTodos,
  removeTodo
}

// Type Action as Type Union;
export type Action = FetchTodosAction | RemoveTodoAction;