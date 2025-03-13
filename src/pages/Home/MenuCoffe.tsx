import { EachCoffee } from "./EachCoffee";
import { MenuContainer, MenuSection, MenuTitle } from "./HomeStyles";
import ItemCoffee from "../../data/DataCoffee.json";

export function MenuCoffee() {
  return (
    <MenuSection>
      <MenuTitle>Nossos cafés</MenuTitle>
      <MenuContainer>
        {ItemCoffee.map((coffee) => (
          <EachCoffee key={coffee.ItemId} coffee={coffee} />
        ))}
      </MenuContainer>
    </MenuSection>
  );
}
