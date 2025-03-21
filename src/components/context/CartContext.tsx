import { ReactNode, createContext, useContext, useState } from "react";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string,
  quantity: number;
}

interface CartContextType {
  cartData: CartItem[];
  setCartData: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartData, setCartData] = useState<CartItem[]>([]);

  return (
    <CartContext.Provider value={{ cartData, setCartData }}>
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
