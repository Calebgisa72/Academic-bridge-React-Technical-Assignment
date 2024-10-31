import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import SingleTask from '../../Components/SingleTask';
import rootReducer from '../../Redux/Reducers/rootReducer';

const store = createStore(rootReducer);

const setup = () => {
  render(
    <Provider store={store}>
      <SingleTask id="1" todo="Test todo" completed={false} myTodo={true} />
    </Provider>
  );
};

describe('SingleTask Component', () => {
  test('renders the todo item correctly', () => {
    setup();

    expect(screen.getByText('Test todo')).toBeInTheDocument();
    expect(screen.getByText('To do')).toBeInTheDocument();
  });

  test('opens the edit form when clicking the edit button', () => {
    setup();

    fireEvent.click(screen.getByTestId('actionsButton'));

    fireEvent.click(screen.getByText(/edit/i));

    expect(screen.getByText('To Do Form')).toBeInTheDocument();
    expect(screen.getByTestId('accept')).toHaveTextContent('Edit Todo');
  });

  test('deletes the todo item when delete is confirmed', () => {
    setup();

    fireEvent.click(screen.getByTestId('actionsButton'));

    fireEvent.click(screen.getByText(/delete/i));

    fireEvent.click(screen.getByText(/yes/i));
  });

  test('closes the menu when clicking outside', () => {
    setup();

    fireEvent.click(screen.getByTestId('actionsButton'));

    fireEvent.mouseDown(document);

    expect(screen.queryByText(/edit/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/delete/i)).not.toBeInTheDocument();
  });
});
