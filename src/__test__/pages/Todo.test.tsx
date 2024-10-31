import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Todo from '../../Pages/Todo';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const mockStore = configureStore([]);
const queryClient = new QueryClient();

describe('Todo Component', () => {
  let mockedstore: ReturnType<typeof mockStore>;

  beforeEach(() => {
    mockedstore = mockStore({
      todo: { todos: [] }
    });
    vi.resetAllMocks();
  });

  const renderWithProviders = (component: React.ReactNode) =>
    render(
      <Provider store={mockedstore}>
        <QueryClientProvider client={queryClient}>{component}</QueryClientProvider>
      </Provider>
    );

  it('renders Todo component correctly', () => {
    renderWithProviders(<Todo />);
    expect(screen.getByText('All Tasks')).toBeInTheDocument();
    expect(screen.getByText('To do')).toBeInTheDocument();
    expect(screen.getByText('In Progress')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
  });

  it("opens TodoForm when 'New Task' button is clicked and closes the TodoForm", () => {
    renderWithProviders(<Todo />);
    const newTaskButton = screen.getByText('New Task');
    fireEvent.click(newTaskButton);
    expect(screen.getByText('To Do Form')).toBeInTheDocument();
    const cancleButton = screen.getByTestId('deny');
    expect(cancleButton).toBeInTheDocument();
    fireEvent.click(cancleButton);
    expect(screen.queryByText('To Do Form')).not.toBeInTheDocument();
  });

  it('displays loading spinner when todos are loading', () => {
    renderWithProviders(<Todo />);
    expect(screen.getByText('Loading todos')).toBeInTheDocument();
  });

  it("displays MockedStored todo's when they are there", async () => {
    render(
      <Provider
        store={mockStore({
          todo: {
            todos: [{ id: 302, completed: false, myTodo: false, todo: 'Todo 1' }]
          }
        })}
      >
        <QueryClientProvider client={queryClient}>
          <Todo />
        </QueryClientProvider>
      </Provider>
    );
    expect(screen.getByText('Todo 1')).toBeInTheDocument();

    const todoButton = screen.getByTestId('todoButton');
    const completedButton = screen.getByTestId('completedButton');
    fireEvent.click(todoButton);

    await waitFor(
      () => {
        expect(screen.getByText('You have no todo todos !!')).toBeInTheDocument();
      },
      { timeout: 5000 }
    );
    fireEvent.click(completedButton);
    await waitFor(
      () => {
        expect(screen.getByText('You have no completed todos !!')).toBeInTheDocument();
      },
      { timeout: 5000 }
    );
  });

  it('displays message when there are no todos', async () => {
    render(
      <Provider
        store={mockStore({
          todo: {
            todos: []
          }
        })}
      >
        <QueryClientProvider client={queryClient}>
          <Todo />
        </QueryClientProvider>
      </Provider>
    );
    await waitFor(
      () => {
        expect(screen.getByText('You have no todos !!')).toBeInTheDocument();
      },
      { timeout: 5000 }
    );
  });
});
