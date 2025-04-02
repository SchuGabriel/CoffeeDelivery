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
import { useCart } from "../../context/CartContext";
import {
  ActionTypes,
  descreaseQuantityAction,
  increaseQuantityAction,
  removeCoffeeAction,
} from "../../reducers/cart/actions";

export function EachCoffeeSelectioned() {
  const { cartData, dispatch } = useCart();

  function handleRemoveCoffee(idRemove: number) {
    dispatch(removeCoffeeAction(idRemove));
  }

  function increaseQuantity(idCoffee: number) {
    dispatch(increaseQuantityAction(idCoffee));
  }

  function decreaseQuantity(idCoffee: number) {
    dispatch(descreaseQuantityAction(idCoffee));
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
                  <Plus size={16} onClick={() => increaseQuantity(coffee.id)} />
                </CoffeeActionQuantity>
                <RemoveButton onClick={() => handleRemoveCoffee(coffee.id)}>
                  <Trash size={16} />
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
