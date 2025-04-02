import { CoffeeCartProps } from "../../pages/Home/Home";

export enum ActionTypes {
  ADD_COFFEE = "ADD_COFFEE",
  INCREASE_QUANTITY = "INCREASE_QUANTITY",
  DESCREASE_QUANTITY = "DESCREASE_QUANTITY",
  REMOVE_COFFEE = "REMOVE_COFFEE",
  CLEAN_COFFEE = "CLEAN_COFFEE",
}

export function addCoffeeAction({ coffee, quantity }: CoffeeCartProps) {
  return {
    type: ActionTypes.ADD_COFFEE,
    payload: {
      coffee,
      quantity,
    },
  };
}

export function increaseQuantityAction(idCoffee: number) {
  return {
    type: ActionTypes.INCREASE_QUANTITY,
    payload: {
      idCoffee,
    },
  };
}

export function descreaseQuantityAction(idCoffee: number) {
  return {
    type: ActionTypes.DESCREASE_QUANTITY,
    payload: {
      idCoffee,
    },
  };
}

export function removeCoffeeAction(idRemove: number) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      idRemove,
    },
  };
}

export function cleanCoffeeAction() {
  return {
    type: ActionTypes.CLEAN_COFFEE,
  };
}
