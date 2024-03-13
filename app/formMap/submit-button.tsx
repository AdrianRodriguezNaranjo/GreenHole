import React from 'react';
import { useFormStatus } from "react-dom";

type Props = {
  children: React.ReactNode;
  formAction: string;
  onSubmit: (e: { preventDefault: () => void; }) => Promise<void>;
  pendingText?: string;
};

export function SubmitButton({ children, formAction, onSubmit, pendingText }: Props) {
  const { pending, action } = useFormStatus();

  const isPending = pending && action === formAction;

  const handleClick = async (e: { preventDefault: () => void; }) => { 
    try {
      await onSubmit(e); 
    } catch (error) {
      console.error('Error al insertar los datos:', error);
    }
  };

  return (
    <button type="button" onClick={handleClick} aria-disabled={pending}>
      {isPending ? pendingText : children}
    </button>
  );
}
