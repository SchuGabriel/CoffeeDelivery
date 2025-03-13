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

interface MenuCoffeProps {
  coffee: {
    ItemId: number;
    ItemDetails: string[];
    ItemTitle: string;
    ItemSubTitle: string;
    ItemPrice: string;
    Image: string,
  };
}

export function EachCoffee({ coffee }: MenuCoffeProps) {
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
        <span>{coffee.ItemPrice}</span>
        <MenuItemActions>
          <MenuItemQuantity>
            <PlusMiniusButton>
              <Minus size={14} color={defaultTheme.purple} weight="bold" />
            </PlusMiniusButton>
            <span>1</span>
            <PlusMiniusButton>
              <Plus size={14} color={defaultTheme.purple} weight="bold" />
            </PlusMiniusButton>
          </MenuItemQuantity>
          <MenuItemActionShopping>
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
