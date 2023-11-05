import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import { useAction } from '@wasp/actions';
import getTodos from '@wasp/queries/getTodos';
import createTodo from '@wasp/actions/createTodo';
import completeTodo from '@wasp/actions/completeTodo';

export function DashboardPage() {
  const { data: todos, isLoading, error } = useQuery(getTodos);
  const createTodoFn = useAction(createTodo);
  const completeTodoFn = useAction(completeTodo);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleCreateTodo = () => {
    createTodoFn({ content: 'New Todo' });
  };

  const handleCompleteTodo = (id) => {
    completeTodoFn({ id });
  };

  return (
    <div className='p-4'>
      <div className='flex items-center justify-between mb-4'>
        <h1 className='text-2xl font-bold'>Dashboard</h1>
        <button
          onClick={handleCreateTodo}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Add Todo
        </button>
      </div>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className='flex items-center justify-between bg-gray-100 p-4 mb-4 rounded-lg'
        >
          <div>{todo.content}</div>
          <div>
            <button
              onClick={() => handleCompleteTodo(todo.id)}
              className={`${
                todo.isDone ? 'bg-green-500' : 'bg-red-500'
              } hover:bg-green-700 text-white font-bold py-2 px-4 rounded`}
            >
              {todo.isDone ? 'Completed' : 'Mark Complete'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}