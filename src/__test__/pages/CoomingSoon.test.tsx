import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { BrowserRouter as Router } from 'react-router-dom';
import ComingSoon from '../../Pages/ComingSoon';

describe('Landing ComingSoon page', () => {
  it('Renders the coming soon page successfully', () => {
    render(
      <Router>
        <ComingSoon page="Home 4" />
      </Router>
    );

    expect(screen.getByText('Home 4 Page')).toBeInTheDocument();
    expect(screen.getByText('Coming Soon !!!!')).toBeInTheDocument();
  });
});
