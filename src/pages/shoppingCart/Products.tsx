import { EachCoffeeSelectioned } from "./EachCoffeeSelectioned";
import {
  CoffeeSelectionContainer,
  EachCoffeeSelectionedContainer,
  ProductsInfoContainer,
  TitleContainerText,
} from "./ShoppingCartStyles";
import { TotalSumarryCart } from "./TotalSumarryCart";

export function Products() {
  return (
    <ProductsInfoContainer>
      <TitleContainerText>Cafés Selecionados</TitleContainerText>
      <CoffeeSelectionContainer>
        <EachCoffeeSelectionedContainer>
          <EachCoffeeSelectioned />
        </EachCoffeeSelectionedContainer>
        <TotalSumarryCart />
      </CoffeeSelectionContainer>
    </ProductsInfoContainer>
  );
}
