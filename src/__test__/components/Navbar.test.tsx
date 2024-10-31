import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../../Components/Navbar';
import { Provider } from 'react-redux';
import { store } from '../../Redux/store';

describe('Navbar Component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );
  });

  it('should render the Navbar', () => {
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });

  it('should toggle the theme when the theme button is clicked', () => {
    const themeToggle = screen.getByTestId('theme-toggle');
    fireEvent.click(themeToggle);
    expect(localStorage.getItem('theme')).toBe('dark');

    fireEvent.click(themeToggle);
    expect(localStorage.getItem('theme')).toBe('light');
  });

  it('should update the search input value', () => {
    const searchInput = screen.getByTestId('search-input') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'test search' } });
    expect(searchInput.value).toBe('test search');
  });

  it('should dispatch search action when search icon is clicked', () => {
    const searchInput = screen.getByTestId('search-input') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'test search' } });
    const searchIcon = screen.getByTestId('search-icon');
    fireEvent.click(searchIcon);
    expect(store.getState().app.search).toBe('test search');
  });

  it('should toggle the sidebar visibility when menu icon is clicked', () => {
    const menuIcon = screen.getByTestId('menu-icon');
    fireEvent.click(menuIcon);
    expect(store.getState().app.viewMenuBar).toBe(true);

    fireEvent.click(menuIcon);
    expect(store.getState().app.viewMenuBar).toBe(false);
  });

  it('should toggle the right sidebar visibility when sidebar icon is clicked', () => {
    const rightSidebarToggle = screen.getByTestId('right-sidebar-toggle');
    fireEvent.click(rightSidebarToggle);
    expect(store.getState().app.rightSidebar).toBe(true);
  });
});
