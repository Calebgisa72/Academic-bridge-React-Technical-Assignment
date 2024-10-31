import React, { useEffect, useState } from 'react';
import { SingleTaskProps } from './SingleTask';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import { toast } from 'react-hot-toast';
import { setTodos } from '../Redux/Reducers/todoReducer';

interface todoFormProps {
  closeTodoForm: () => void;
  todoId?: string | number;
}

const TodoForm = ({ closeTodoForm, todoId }: todoFormProps) => {
  const { todos } = useSelector((state: RootState) => state.todo);
  const [todoTitle, setTodoTitle] = useState<string>('');
  const dispatch = useDispatch();
  const [status, setStatus] = useState<'completed' | 'pending' | 'todo' | string>('');
  useEffect(() => {
    if (todoId) {
      const todo = todos.find((todo) => (todo.id === todoId ? true : false));
      if (todo) {
        setTodoTitle(todo.todo);
        if (todo.completed) {
          setStatus('completed');
        } else if (!todo.completed && !todo.myTodo) {
          setStatus('pending');
        } else if (todo.myTodo) {
          setStatus('todo');
        }
      }
    }
  }, [todoId]);

  const handleAddTodo = () => {
    if (!todoTitle.trim()) {
      toast.error('Todo title is required');
      return;
    }
    const newTodo: SingleTaskProps = {
      id: Math.floor(Math.random() * (2000 - 250 + 1)) + 250,
      todo: todoTitle,
      completed: false,
      myTodo: true
    };
    const updatedTodos = [newTodo, ...todos];
    dispatch(setTodos(updatedTodos));
    toast.success('Todo added successfully !');
    closeTodoForm();
  };

  const handleUpdateTodo = (id: string | number) => {
    if (!todoTitle.trim()) {
      toast.error('Todo title is required');
      return;
    }

    const updatedTodos = todos.map((todo) => {
      if (todo.id == id) {
        return {
          ...todo,
          todo: todoTitle,
          completed: status === 'completed',
          myTodo: status === 'todo'
        };
      } else {
        return todo;
      }
    });

    dispatch(setTodos(updatedTodos));
    toast.success('Todo updated successfully !');
    closeTodoForm();
  };

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-300 ease-out">
      <div className="bg-background dark:bg-background-dark py-4 px-3 w-[400px] flex flex-col gap-5 items-center rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out">
        <p className="text-[22px] underline font-semibold">To Do Form</p>
        <div className="flex flex-col gap-5 items-center">
          <label className="flex gap-3 items-center">
            Todo:
            <input
              type="text"
              data-testid="todoInput"
              value={todoTitle}
              onChange={(e) => setTodoTitle(e.target.value)}
              placeholder="Type your todo..."
              className="w-full placeholder:text-sm bg-card dark:bg-card-dark outline-none border-[1px] border-description rounded-[8px]
               h-full py-2 pr-[8px] pl-[6px]"
            />
          </label>
          {todoId && (
            <label className="flex gap-2">
              <p className="mt-1">Status:</p>
              <select
                className="w-[200px] mb-[90px] px-2 py-2 font-sans text-xs text-foreground dark:text-foreground-dark border rounded outline-none bg-card dark:bg-card-dark border-primary cursor-pointer"
                onChange={(e) => {
                  setStatus(e.currentTarget.value);
                }}
                value={status}
                data-testid="roleSelector"
              >
                <option value="" disabled>
                  Select Role
                </option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="todo">Todo</option>
              </select>
            </label>
          )}
          <div className="flex space-x-4">
            <button
              data-testid="deny"
              type="button"
              onClick={closeTodoForm}
              className="px-[5px] py-[3px] border border-primary text-primary rounded hover:bg-opacity-40 transition duration-300"
            >
              Cancle
            </button>
            <button
              type="button"
              data-testid="accept"
              onClick={() => {
                if (todoId) {
                  handleUpdateTodo(todoId);
                } else {
                  handleAddTodo();
                }
              }}
              className="px-2 py-1 bg-primary text-white rounded hover:bg-opacity-90 transition duration-300"
            >
              {!todoId ? 'Create' : 'Edit'} Todo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
