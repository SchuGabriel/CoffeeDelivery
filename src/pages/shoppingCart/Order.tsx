import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";
import {
  AddressAndPaymentContainer,
  DeliveryContainer,
  DeliveryInfoAddress,
  DeliveryInfoHeader,
  DeliveryInfoText,
  ErrorsContainer,
  FirstInput,
  FourthInput,
  GroupRadioPayment,
  OrderInfoContainer,
  PText,
  PaymentMethodContainer,
  SecondInput,
  SpanText,
  ThirdInput,
  TitleContainerText,
} from "./ShoppingCartStyles";
import { defaultTheme } from "../../styles/themes/default";
import { useCart, useErrors } from "../../context";
import { useState } from "react";

interface orderProps {
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Order({ onInputChange }: orderProps) {
  const [inputFilled, SetInputFilled] = useState(false);
  const { errors } = useErrors();
  const { formData } = useCart();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    SetInputFilled(value === null ? false : value.trim() !== "");
    onInputChange(event);
  }

  return (
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
              <ErrorsContainer>
                <input
                  type="text"
                  name="cep"
                  placeholder="CEP"
                  onChange={handleInputChange}
                />
                {errors.cep && <span>{errors.cep}</span>}
              </ErrorsContainer>
            </FirstInput>
            <SecondInput value={inputFilled}>
              <ErrorsContainer>
                <input
                  type="text"
                  name="rua"
                  placeholder="Rua"
                  onChange={handleInputChange}
                  value={formData.rua}
                />
                {errors.rua && <span>{errors.rua}</span>}
              </ErrorsContainer>
            </SecondInput>
            <ThirdInput value={inputFilled}>
              <ErrorsContainer>
                <input
                  type="text"
                  name="numero"
                  placeholder="Número"
                  onChange={handleInputChange}
                />
                {errors.numero && <span>{errors.numero}</span>}
              </ErrorsContainer>
              <ErrorsContainer>
                <input
                  type="text"
                  name="complemento"
                  placeholder="Complemento"
                  onChange={handleInputChange}
                />
              </ErrorsContainer>
            </ThirdInput>
            <FourthInput value={inputFilled}>
              <ErrorsContainer>
                <input
                  type="text"
                  name="bairro"
                  placeholder="Bairro"
                  onChange={handleInputChange}
                  value={formData.bairro}
                />
                {errors.bairro && <span>{errors.bairro}</span>}
              </ErrorsContainer>
              <ErrorsContainer>
                <input
                  type="text"
                  name="cidade"
                  placeholder="Cidade"
                  onChange={handleInputChange}
                  value={formData.cidade}
                />
                {errors.cidade && <span>{errors.cidade}</span>}
              </ErrorsContainer>
              <ErrorsContainer style={{ width: "100%" }}>
                <input
                  type="text"
                  name="uf"
                  placeholder="UF"
                  onChange={handleInputChange}
                  value={formData.uf}
                />
                {errors.uf && <span>{errors.uf}</span>}
              </ErrorsContainer>
            </FourthInput>
          </DeliveryInfoAddress>
        </DeliveryContainer>
        <DeliveryContainer>
          <DeliveryInfoHeader>
            <CurrencyDollar size={22} color={defaultTheme["purple"]} />
            <DeliveryInfoText>
              <PText>Pagamento</PText>
              <SpanText>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </SpanText>
            </DeliveryInfoText>
          </DeliveryInfoHeader>
          <ErrorsContainer>
            <PaymentMethodContainer>
              <GroupRadioPayment htmlFor="creditCard">
                <input
                  type="radio"
                  name="paymentMethod"
                  id="creditCard"
                  value={"credit"}
                  onChange={handleInputChange}
                />
                <CreditCard size={16} color={defaultTheme["purple"]} />
                <span>CARTÃO DE CRÉDITO</span>
              </GroupRadioPayment>
              <GroupRadioPayment htmlFor="debitCard">
                <input
                  type="radio"
                  name="paymentMethod"
                  id="debitCard"
                  value={"debit"}
                  onChange={handleInputChange}
                />
                <Money size={16} color={defaultTheme["purple"]} />
                <span>CARTÃO DE DÉBITO</span>
              </GroupRadioPayment>
              <GroupRadioPayment htmlFor="money">
                <input
                  type="radio"
                  name="paymentMethod"
                  id="money"
                  value={"money"}
                  onChange={handleInputChange}
                />
                <Bank size={16} color={defaultTheme["purple"]} />
                <span>DINHEIRO</span>
              </GroupRadioPayment>
            </PaymentMethodContainer>
            {errors.paymentMethod && <span>{errors.paymentMethod}</span>}
          </ErrorsContainer>
        </DeliveryContainer>
      </AddressAndPaymentContainer>
    </OrderInfoContainer>
  );
}
