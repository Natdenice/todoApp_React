import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddForm';

class App extends Component {
  state = {
    todos: [
      {
        content: 'Buy a new Jet',
        id: 1,
        completed: false
      },
      {
        content: 'Buy a new Car',
        id: 2,
        completed: false
      },
      {
        content: 'Buy a new house',
        id: 3,
        isCompleted: false
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

  addTodo = todo => {
    todo.id = Math.random();
    const todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    });
  };

  completeTodo = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      })
    });
  };

  render() {
    return (
      <div className="TodoApp container">
        <h1 className="center blue-text">TodoApp</h1>
        <Todos
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          completeTodo={this.completeTodo}
        />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
