import { produce } from "immer";
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
      return produce(state, (draft) => {
        const coffeeCurrentIndexAdd = draft.findIndex(
          (coffee) => coffee.id === action.payload.coffee.ItemId
        );
        if (coffeeCurrentIndexAdd !== -1) {
          console.log(draft[coffeeCurrentIndexAdd].quantity);
          draft[coffeeCurrentIndexAdd].quantity = action.payload.quantity;
        } else {
          draft.push(newCoffee);
        }
      });

    case ActionTypes.INCREASE_QUANTITY:
      const coffeeCurrentIndexIncrease = state.findIndex((coffee) => {
        return coffee.id === action.payload.idCoffee;
      });
      return produce(state, (draft) => {
        draft[coffeeCurrentIndexIncrease].quantity++;
      });

    case ActionTypes.DESCREASE_QUANTITY:
      const coffeeCurrentIndexDescrease = state.findIndex((coffee) => {
        return coffee.id == action.payload.idCoffee;
      });
      return produce(state, (draft) => {
        if (draft[coffeeCurrentIndexDescrease].quantity !== 1) {
          draft[coffeeCurrentIndexDescrease].quantity--;
        }
      });

    case ActionTypes.REMOVE_COFFEE:
      return state.filter((coffee) => coffee.id !== action.payload.idRemove);

    case ActionTypes.CLEAN_COFFEE:
      return [];

    default:
      return state;
  }
}
