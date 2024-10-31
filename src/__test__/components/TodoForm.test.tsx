import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { toast } from 'react-hot-toast';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TodoForm from '../../Components/TodoForm';

const mockStore = configureStore([]);

describe('Todo form functionality', () => {
  let store: ReturnType<typeof mockStore>;
  beforeEach(() => {
    store = mockStore({
      todo: { todos: [] }
    });
    vi.resetAllMocks();
  });

  vi.mock('react-hot-toast', () => ({
    toast: {
      success: vi.fn(),
      error: vi.fn()
    }
  }));

  it('should render the todo form and bring edit functionalities when the todo is being edited', () => {
    render(
      <Provider
        store={mockStore({
          todo: {
            todos: [{ id: 302, completed: false, myTodo: false, todo: 'Todo 1' }]
          }
        })}
      >
        <TodoForm closeTodoForm={vi.fn()} todoId={302} />
      </Provider>
    );

    expect(screen.getByText('To Do Form')).toBeInTheDocument();
    const addOrUpdateTodoButton = screen.getByTestId('accept');
    const cancleButton = screen.getByTestId('deny');
    const roleSelector = screen.queryByTestId('roleSelector');

    expect(cancleButton).toBeInTheDocument();
    expect(roleSelector).toBeInTheDocument();

    const todoInput = screen.getByTestId('todoInput');
    fireEvent.change(todoInput, { target: { value: 'todo 100' } });

    expect(addOrUpdateTodoButton).toHaveTextContent('Edit Todo');
    fireEvent.click(addOrUpdateTodoButton);
  });

  it('should render the todo form with no editing functionality when the todo is not being edited', () => {
    render(
      <Provider store={store}>
        <TodoForm closeTodoForm={vi.fn()} />
      </Provider>
    );

    expect(screen.getByText('To Do Form')).toBeInTheDocument();
    const addOrUpdateTodoButton = screen.getByTestId('accept');
    const cancleButton = screen.getByTestId('deny');
    const roleSelector = screen.queryByTestId('roleSelector');

    expect(cancleButton).toBeInTheDocument();
    expect(roleSelector).not.toBeInTheDocument();

    fireEvent.click(addOrUpdateTodoButton);
    expect(toast.error).toHaveBeenCalledWith('Todo title is required');

    const todoInput = screen.getByTestId('todoInput');
    fireEvent.change(todoInput, { target: { value: 'todo 100' } });

    fireEvent.click(addOrUpdateTodoButton);

    expect(toast.success).toHaveBeenCalledWith('Todo added successfully !');
    expect(addOrUpdateTodoButton).toHaveTextContent('Create Todo');
  });
});
