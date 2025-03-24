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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../components/context/CartContext";

export function ShoppingCart() {
  const [inputFilled, SetInputFilled] = useState(false);
  const { setCartData } = useCart();
  const navigate = useNavigate();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    SetInputFilled(
      event.target.value === null ? false : event.target.value.trim() !== ""
    );
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(event);
    setCartData([]);
    navigate("/orderConfirmed");
  }

  return (
    <form onSubmit={handleSubmit}>
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
                <FirstInput value={inputFilled}>
                  <input
                    type="text"
                    name="cep"
                    placeholder="CEP"
                    onChange={handleInputChange}
                  />
                </FirstInput>
                <SecondInput value={inputFilled}>
                  <input
                    type="text"
                    name="rua"
                    placeholder="Rua"
                    onChange={handleInputChange}
                  />
                </SecondInput>
                <ThirdInput value={inputFilled}>
                  <input
                    type="text"
                    name="numero"
                    placeholder="Número"
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="complemento"
                    placeholder="Complemento"
                    onChange={handleInputChange}
                  />
                </ThirdInput>
                <FourthInput value={inputFilled}>
                  <input
                    type="text"
                    name="bairro"
                    placeholder="Bairro"
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="cidade"
                    placeholder="Cidade"
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="uf"
                    placeholder="UF"
                    onChange={handleInputChange}
                  />
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
    </form>
  );
}
