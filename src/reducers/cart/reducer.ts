import { CartItem } from "../../context/CartContext";
import { ActionTypes } from "./actions";

export function CartReducer(state: CartItem[], action: any) {
  console.log(state, action);
  switch (action.type) {
    case ActionTypes.ADD_COFFEE:
      const newCoffee: CartItem = {
        id: action.payload.coffee.ItemId,
        name: action.payload.coffee.ItemTitle,
        price: action.payload.coffee.ItemPrice,
        image: action.payload.coffee.Image,
        quantity: action.payload.quantity,
      };
      return state
        .map((item) =>
          item.id === action.payload.coffee.ItemId
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        )
        .concat(
          state.find((item) => item.id === action.payload.coffee.ItemId)
            ? []
            : [newCoffee]
        );

    case ActionTypes.INCREASE_QUANTITY:
      return state.map((coffee) =>
        coffee.id === action.payload.idCoffee
          ? { ...coffee, quantity: coffee.quantity + 1 }
          : coffee
      );

    case ActionTypes.DESCREASE_QUANTITY:
      return state.map((coffee) =>
        coffee.id === action.payload.idCoffee
          ? {
              ...coffee,
              quantity:
                coffee.quantity === 1 ? coffee.quantity : coffee.quantity - 1,
            }
          : coffee
      );

    case ActionTypes.REMOVE_COFFEE:
      return state.filter((coffee) => coffee.id !== action.payload.idRemove);

    case ActionTypes.CLEAN_COFFEE:
      return [];

    default:
      return state;
  }
}
