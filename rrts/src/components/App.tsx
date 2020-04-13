import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, removeTodo } from '../actions';
import { StoreState } from '../reducers';

//make it a function bec. react-redux doesn't know what type is a redux thunk is
interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  removeTodo: Function;
}

interface AppState {
  fetching: boolean
}

class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { fetching: false };
  }

  componentDidUpdate(prevProps: AppProps): void {
    if(!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  onFetch = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
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
        {this.state.fetching ? 'Loading' : null}
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