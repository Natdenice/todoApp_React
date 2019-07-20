import React from 'react';
import Button from '@material-ui/core/Button';

// This is only a functionnal component
// we dont need state inside , just created
// to render and use the state inside App.js

// we need to pass todos from App.js component
// to Todos component, so we have to pass props

const Todos = ({ todos, deleteTodo, completeTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div
          style={{ display: 'flex', justifyContent: 'space-between' }}
          className="collection-item"
          key={todo.id}
        >
          <span
            style={{
              textDecoration: todo.isCompleted ? 'line-through' : 'none',
              marginTop: '6px',
              fontSize: '15px',
              fontWeight: '400',
              cursor: 'pointer'
            }}
            onClick={() => {
              completeTodo(todo.id);
            }}
          >
            {todo.content}
          </span>

          <Button
            onClick={() => {
              deleteTodo(todo.id);
            }}
            variant="outlined"
            color="secondary"
          >
            Delete
          </Button>
        </div>
      );
    })
  ) : (
    <p style={{ fontSize: '16px' }} className="center">
      There is nothing to do today !
    </p>
  );

  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
