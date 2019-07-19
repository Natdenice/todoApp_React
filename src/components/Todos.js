import React from 'react';
// This is only a functionnal component
// we dont need state inside , just created
// to render and use the state inside App.js

// we need to pass todos from App.js component
// to Todos component, so we have to pass props

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            {todo.content}
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">There is nothing to do today !</p>
  );

  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
