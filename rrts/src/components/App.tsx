import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, removeTodo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  removeTodo: Function;
}

class _App extends React.Component<AppProps> {
  onFetch = (): void => {
    this.props.fetchTodos();
  }

  // return array elements
  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return <div key={todo.id}><p>{todo.title}</p></div>
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onFetch}>Fetch</button>
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return {
    todos
  }
}

export const App = connect(mapStateToProps, {
  fetchTodos,
  removeTodo
})(_App);