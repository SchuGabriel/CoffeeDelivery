import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";
import {
  AddressAndPaymentContainer,
  CartContainer,
  CoffeeSelectionContainer,
  DeliveryInfoAddress,
  DeliveryContainer,
  DeliveryInfoHeader,
  DeliveryInfoText,
  OrderInfoContainer,
  PaymentMethodContainer,
  ProductsInfoContainer,
  TitleContainerText,
  SpanText,
  PText,
  TotalSummary,
  FontDefine,
  FirstInput,
  SecondInput,
  ThirdInput,
  FourthInput,
  EachCoffeeSelectionedContainer,
} from "./ShoppingCartStyles";
import { defaultTheme } from "../../styles/themes/default";

import { EachCoffeeSelectioned } from "./EachCoffeeSelectioned";
import { TotalSumarryCart } from "./TotalSumarryCart";

export function ShoppingCart() {
  return (
    <CartContainer>
      <OrderInfoContainer>
        <TitleContainerText>Complete seu pedido</TitleContainerText>
        <AddressAndPaymentContainer>
          <DeliveryContainer>
            <DeliveryInfoHeader>
              <MapPinLine size={22} color={defaultTheme["yellow-dark"]} />
              <DeliveryInfoText>
                <PText>Endereço de Entrega</PText>
                <SpanText>
                  Informe o endereço onde deseja receber seu pedido
                </SpanText>
              </DeliveryInfoText>
            </DeliveryInfoHeader>
            <DeliveryInfoAddress>
              <FirstInput>
                <input type="text" placeholder="CEP" />
              </FirstInput>
              <SecondInput>
                <input type="text" placeholder="Rua" />
              </SecondInput>
              <ThirdInput>
                <input type="text" placeholder="Número" />
                <input type="text" placeholder="Complemento" />
              </ThirdInput>
              <FourthInput>
                <input type="text" placeholder="Bairro" />
                <input type="text" placeholder="Cidade" />
                <input type="text" placeholder="UF" />
              </FourthInput>
            </DeliveryInfoAddress>
          </DeliveryContainer>
          <DeliveryContainer>
            <DeliveryInfoHeader>
              <CurrencyDollar size={22} color={defaultTheme["purple"]} />
              <DeliveryInfoText>
                <PText>Pagamento</PText>
                <SpanText>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </SpanText>
              </DeliveryInfoText>
            </DeliveryInfoHeader>
            <PaymentMethodContainer>
              <div>
                <CreditCard size={16} color={defaultTheme["purple"]} />
                <span>CARTÃO DE CRÉDITO</span>
              </div>
              <div>
                <Money size={16} color={defaultTheme["purple"]} />
                <span>CARTÃO DE DÉBITO</span>
              </div>
              <div>
                <Bank size={16} color={defaultTheme["purple"]} />
                <span>DINHEIRO</span>
              </div>
            </PaymentMethodContainer>
          </DeliveryContainer>
        </AddressAndPaymentContainer>
      </OrderInfoContainer>
      <ProductsInfoContainer>
        <TitleContainerText>Cafés Selecionados</TitleContainerText>
        <CoffeeSelectionContainer>
          <EachCoffeeSelectionedContainer>
            <EachCoffeeSelectioned />
          </EachCoffeeSelectionedContainer>
          <TotalSumarryCart />
        </CoffeeSelectionContainer>
      </ProductsInfoContainer>
    </CartContainer>
  );
}
