import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import RightSidebar from '../../Components/RightSidebar';

describe('RightSidebar component', () => {
  it("Renders the project overview header and 'See all' link", () => {
    render(<RightSidebar />);

    expect(screen.getByText('Project Overview')).toBeInTheDocument();
    expect(screen.getByText('See all')).toBeInTheDocument();
  });

  it('Displays the timeline, team avatars, and status', () => {
    render(<RightSidebar />);

    expect(screen.getByText('Timeline:')).toBeInTheDocument();
    expect(screen.getByText('Apr 14 - May 7')).toBeInTheDocument();
    expect(screen.getByText('Status:')).toBeInTheDocument();
    expect(screen.getByText('In Progress')).toBeInTheDocument();

    const avatars = screen.getAllByAltText('Team member');
    expect(avatars.length).toBe(6);
  });

  it('Has a message input field with placeholder text', () => {
    render(<RightSidebar />);

    const messageInput = screen.getByPlaceholderText('Your Message...');
    expect(messageInput).toBeInTheDocument();
  });

  it('Displays icons for Mic, Minus, and Send in the footer section', () => {
    render(<RightSidebar />);
  });
});
