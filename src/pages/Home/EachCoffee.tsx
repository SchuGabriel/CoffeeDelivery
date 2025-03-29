import { useEffect, useState } from "react";
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import {
  ItemDetail,
  MenuItem,
  MenuItemActionShopping,
  MenuItemActions,
  MenuItemBuyContainer,
  MenuItemDetails,
  MenuItemQuantity,
  MenuItemSubTitle,
  MenuItemTitle,
  PlusMiniusButton,
} from "./HomeStyles";
import { defaultTheme } from "../../styles/themes/default";
import { CoffeeCartProps, CoffeeProps } from "./Home";
import { FormatPrice } from "../../components/FormatPrice";

export interface EachCoffeeProps {
  coffee: CoffeeProps;
  onAddCart: ({ coffee, quantity }: CoffeeCartProps) => void;
}

export function EachCoffee({ coffee, onAddCart }: EachCoffeeProps) {
  const [quantity, setQuantity] = useState(1);

  function increaseQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function decreaseQuantity() {
    setQuantity((prevQuantity) => prevQuantity === 1 ? prevQuantity : prevQuantity - 1);
  }

  useEffect(() => {}, [quantity]);

  return (
    <MenuItem>
      <img src={coffee.Image} />
      <MenuItemDetails>
        {coffee.ItemDetails.map((detail) => (
          <ItemDetail key={detail}>{detail}</ItemDetail>
        ))}
      </MenuItemDetails>
      <MenuItemTitle>{coffee.ItemTitle}</MenuItemTitle>
      <MenuItemSubTitle>{coffee.ItemSubTitle}</MenuItemSubTitle>
      <MenuItemBuyContainer>
        <span>
          <FormatPrice price={coffee.ItemPrice}/>
        </span>
        <MenuItemActions>
          <MenuItemQuantity>
            <PlusMiniusButton onClick={decreaseQuantity}>
              <Minus size={14} weight="bold" />
            </PlusMiniusButton>
            <span>{quantity}</span>
            <PlusMiniusButton onClick={increaseQuantity}>
              <Plus size={14} weight="bold" />
            </PlusMiniusButton>
          </MenuItemQuantity>
          <MenuItemActionShopping onClick={() => onAddCart({coffee, quantity})}>
            <ShoppingCart
              size={26}
              color={defaultTheme["white"]}
              weight="fill"
            />
          </MenuItemActionShopping>
        </MenuItemActions>
      </MenuItemBuyContainer>
    </MenuItem>
  );
}
