import { Minus, Plus, Trash } from "@phosphor-icons/react";
import {
  CoffeeActionQuantity,
  CoffeeActions,
  CoffeeDetailsContainer,
  CoffeeInfo,
  CoffeeSelectioned,
  FontDefine,
  RemoveButton,
} from "./ShoppingCartStyles";
import { defaultTheme } from "../../styles/themes/default";
import { useCart } from "../../components/context/CartContext";

export function EachCoffeeSelectioned() {
  const { cartData, setCartData } = useCart();

  function handleRemoveCoffee(idRemove: number) {
    setCartData(cartData.filter((coffee) => coffee.id !== idRemove));
  }

  function increaseQuantity(idCoffee: number) {
    setCartData(
      cartData.map((coffee) =>
        coffee.id === idCoffee
          ? { ...coffee, quantity: coffee.quantity + 1 }
          : coffee
      )
    );
  }

  function decreaseQuantity(idCoffee: number) {
    setCartData(
      cartData.map((coffee) =>
        coffee.id === idCoffee
          ? { ...coffee, quantity: coffee.quantity - 1}
          : coffee
      )
    );
  }

  return (
    <>
      {cartData.map((coffee) => (
        <CoffeeSelectioned>
          <CoffeeInfo>
            <img src={coffee.image} />
            <CoffeeDetailsContainer>
              <p>{coffee.name}</p>
              <CoffeeActions>
                <CoffeeActionQuantity>
                  <Minus
                    size={16}
                    onClick={() => decreaseQuantity(coffee.id)}
                  />
                  <span>{coffee.quantity}</span>
                  <Plus
                    size={16}
                    onClick={() => increaseQuantity(coffee.id)}
                  />
                </CoffeeActionQuantity>
                <RemoveButton onClick={() => handleRemoveCoffee(coffee.id)}>
                  <Trash size={16}  />
                  <span>REMOVER</span>
                </RemoveButton>
              </CoffeeActions>
            </CoffeeDetailsContainer>
          </CoffeeInfo>
          <FontDefine size={1} weight={700} color={defaultTheme["base-text"]}>
            {new Intl.NumberFormat("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            }).format(coffee.price)}
          </FontDefine>
        </CoffeeSelectioned>
      ))}
    </>
  );
}
