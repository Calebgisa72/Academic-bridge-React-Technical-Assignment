import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import ReacivedMessage from '../../Components/ReacivedMessage';

describe('ReacivedMessage component', () => {
  const mockProps = {
    profileImage: 'path/to/profileImage.png',
    name: 'Jane Doe',
    time: '12:00 PM',
    message: 'Hello, this is a received message!',
    voiceNoteMessage: false
  };

  it("Displays the sender's name and time correctly", () => {
    render(<ReacivedMessage {...mockProps} />);

    expect(screen.getByText(mockProps.name)).toBeInTheDocument();
    expect(screen.getByText(mockProps.time)).toBeInTheDocument();
  });

  it('Displays the message content when provided', () => {
    render(<ReacivedMessage {...mockProps} />);
    expect(screen.getByText(mockProps.message as string)).toBeInTheDocument();
  });

  it('Does not display message content when message is not provided', () => {
    render(<ReacivedMessage {...mockProps} message={undefined} />);
    expect(screen.queryByText(mockProps.message as string)).toBeNull();
  });

  it("Renders the sender's avatar", () => {
    render(<ReacivedMessage {...mockProps} />);
    const avatarImage = screen.getByTestId('Avatar');
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute('src', mockProps.profileImage);
  });

  it('Displays the voice note component when voiceNoteMessage is true', () => {
    render(<ReacivedMessage {...mockProps} voiceNoteMessage={true} />);
    const voiceNote = screen.getByTestId('voice-note');
    expect(voiceNote).toBeInTheDocument();
  });

  it('Does not display the voice note component when voiceNoteMessage is false', () => {
    render(<ReacivedMessage {...mockProps} voiceNoteMessage={false} />);
    expect(screen.queryByTestId('voice-note')).toBeNull();
  });
});
