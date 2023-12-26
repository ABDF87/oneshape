'use client';
import React, { createContext, useContext, useState } from 'react';

type FormContextProviderProps = {
  children: React.ReactNode;
};

type FormContextType = {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  formInfo?: {
    service: string;
    master: string;
  };
  setFormInfo?: (value: { service: string; master: string }) => void;
};
export const FormContext = createContext<FormContextType | null>(null);

export default function FormContextProvider({
  children,
}: FormContextProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formInfo, setFormInfo] = useState({ service: '', master: '' });

  return (
    <FormContext.Provider
      value={{ isModalOpen, setIsModalOpen, formInfo, setFormInfo }}
    >
      {children}
    </FormContext.Provider>
  );
}

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormContextProvider');
  }
  return context;
};
