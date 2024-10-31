import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import SentMessage from '../../Components/SentMessage';

describe('SentMessage component', () => {
  const mockProps = {
    profileImage: 'path/to/profileImage.png',
    name: 'John Doe',
    time: '12:00 PM',
    message: 'Hello, this is a test message!'
  };

  it("Displays the sender's name and time correctly", () => {
    render(<SentMessage {...mockProps} />);

    expect(screen.getByText(mockProps.name)).toBeInTheDocument();
    expect(screen.getByText(mockProps.time)).toBeInTheDocument();
  });

  it('Displays the message content', () => {
    render(<SentMessage {...mockProps} />);

    expect(screen.getByText(mockProps.message)).toBeInTheDocument();
  });

  it("Renders the sender's avatar", () => {
    render(<SentMessage {...mockProps} />);

    const avatarImage = screen.getByTestId('Avatar');
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute('src', mockProps.profileImage);
  });
});
