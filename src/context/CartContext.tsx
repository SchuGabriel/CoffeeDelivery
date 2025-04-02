import React, {
  ReactNode,
  createContext,
  useContext,
  useReducer,
  useState,
} from "react";
import { useErrors } from "./ErrorsContext";
import { CartReducer } from "../reducers/cart/reducer";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface FormDataType {
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  paymentMethod: string;
}

interface CartContextType {
  cartData: CartItem[];
  dispatch: React.Dispatch<{ type: string; payload?: any }>;
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormDataType>({
    cep: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    uf: "",
    paymentMethod: "",
  });

  const [cartData, dispatch] = useReducer(CartReducer, []);

  return (
    <CartContext.Provider value={{ cartData, dispatch, formData, setFormData }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  return context;
};
