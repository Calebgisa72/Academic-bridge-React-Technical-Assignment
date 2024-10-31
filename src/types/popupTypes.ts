import React from 'react';
export interface FormPopupProps {
  title: string;
  submitText?: string;
  closeText?: string;
  body: React.ReactNode;
  trigger: React.ReactNode;
  onSubmit?: (data: React.MouseEvent<HTMLButtonElement>) => void;
  onClose?: () => void;
}
