import React, { Component } from 'react';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        content: 'Buy a new Jet',
        id: 1
      },
      {
        content: 'Buy a new Car',
        id: 2
      },
      {
        content: 'Buy a new house',
        id: 3
      }
    ]
  };

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos
    });
  };

  render() {
    return (
      <div className="TodoApp container">
        <h1 className="center blue-text">TodoApp</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
