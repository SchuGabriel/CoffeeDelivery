import { EachCoffee } from "./EachCoffee";
import { MenuContainer, MenuSection, MenuTitle } from "./HomeStyles";
import ItemCoffee from "../../data/DataCoffee.json";
import { CoffeeProps, MenuCoffeProps } from "./Home";

export function MenuCoffee({ onAddCart }: MenuCoffeProps) {
  const itemCoffee = ItemCoffee;

  return (
    <MenuSection>
      <MenuTitle>Nossos cafés</MenuTitle>
      <MenuContainer>
        {itemCoffee.map((coffee) => (
          <EachCoffee
            key={coffee.ItemId}
            coffee={coffee}
            onAddCart={onAddCart}
          />
        ))}
      </MenuContainer>
    </MenuSection>
  );
}
