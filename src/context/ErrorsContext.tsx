import React, { ReactNode, createContext, useContext, useState } from "react";

interface ErrorsContextType {
  errors: Record<string, string>;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}

const ErrorsContext = createContext<ErrorsContextType | undefined>(undefined);

export const ErrorsProvider = ({ children }: { children: ReactNode }) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  return (
    <ErrorsContext.Provider value={{ errors, setErrors }}>
      {children}
    </ErrorsContext.Provider>
  );
};

export const useErrors = () => {
  const context = useContext(ErrorsContext);
  if (!context) {
    throw new Error("useErrors deve ser usado dentro de um ErrorsProvider");
  }
  return context;
};
