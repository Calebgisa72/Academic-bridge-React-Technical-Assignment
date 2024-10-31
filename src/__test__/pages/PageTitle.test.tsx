import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter as Router } from 'react-router-dom';
import PageTitle from '../../Pages/PageTitle';

describe('PageTitle component', () => {
  it('sets the document title based on the title prop', () => {
    const testTitle = 'Test Page Title';

    render(
      <Router>
        <PageTitle title={testTitle} />
      </Router>
    );
    expect(document.title).toBe(testTitle);
  });
});
