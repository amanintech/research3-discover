import React, { ReactElement, MouseEvent } from 'react';
import { Button } from '../buttons/Button';
import { ModalProps } from './StyledModal';
import {
  ConfirmationModal,
  ConfirmationHeading,
  ConfirmationDescription,
  ConfirmationButtons,
} from './ConfirmationModal';

export interface DiscardActionModalProps extends ModalProps {
  onDiscard: (event: MouseEvent) => void;
  title?: string;
  description?: string;
  leftButtonText?: string;
  rightButtonText?: string;
}

export default function DiscardActionModal({
  onDiscard,
  onRequestClose,
  title = 'Discard comment',
  description = 'Are you sure you want to close and discard your comment?',
  leftButtonText = 'Stay',
  rightButtonText = 'Discard',
  ...props
}: DiscardActionModalProps): ReactElement {
  return (
    <ConfirmationModal {...props}>
      <ConfirmationHeading>{title}</ConfirmationHeading>
      <ConfirmationDescription>{description}</ConfirmationDescription>
      <ConfirmationButtons>
        <Button className="btn-secondary" onClick={onRequestClose}>
          {leftButtonText}
        </Button>
        <Button className="btn-primary-ketchup" onClick={onDiscard}>
          {rightButtonText}
        </Button>
      </ConfirmationButtons>
    </ConfirmationModal>
  );
}
