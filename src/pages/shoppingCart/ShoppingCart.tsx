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
  ErrorsContainer,
  GroupRadioPayment,
} from "./ShoppingCartStyles";
import { defaultTheme } from "../../styles/themes/default";

import { EachCoffeeSelectioned } from "./EachCoffeeSelectioned";
import { TotalSumarryCart } from "./TotalSumarryCart";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as zod from "zod";
import { useCart } from "../../components/context/CartContext";

const cartDataValidationSchema = zod.object({
  cep: zod.string().min(8, "CEP Invalido").max(8, "CEP Invalido"),
  rua: zod.string().nonempty("Rua é obrigatória"),
  numero: zod
    .string()
    .min(1, "Numero obrigatorio")
    .max(5, "Numero obrigatorio"),
  complemento: zod.string().optional(),
  bairro: zod.string().min(1, "Bairro é obrigatório"),
  cidade: zod.string().min(1, "Cidade é obrigatória"),
  uf: zod.string().length(2, "UF deve ter 2 caracteres"),

  paymentMethod: zod.enum(["credit", "debit", "money"], {
    errorMap: () => ({
      message:
        "Método de pagamento inválido. Escolha entre 'crédito', 'débito' ou 'dinheiro'.",
    }),
  }),
});

export function ShoppingCart() {
  const [inputFilled, SetInputFilled] = useState(false);
  const { setCartData } = useCart();
  const navigate = useNavigate();

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    cep: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    uf: "",
    paymentMethod: "",
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    SetInputFilled(value === null ? false : value.trim() !== "");

    if (name === "cep" && value.length == 8) {
      console.log("nome:", name, value);
      formatCep(value).then((newValue) => {
        console.log("novo valor", value);
        setFormData((prevData) => ({
          ...prevData,
          rua: newValue.street || "",
          bairro: newValue.neighborhood || "",
          cidade: newValue.city || "",
          uf: newValue.state || "",
          cep: value,
        }));

        if (newValue.street) {
          setErrors((prevErrors) => {
            const { rua, bairro, cidade, uf, ...newErrors } = prevErrors;
            return newErrors;
          });
        }
      });
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }

    setErrors((prevErrors) => {
      const { [name]: _, ...newErrors } = prevErrors;
      return newErrors;
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationResult = cartDataValidationSchema.safeParse(formData);
    if (!validationResult.success) {
      const formattedErrors: Record<string, string> = {};
      validationResult.error.errors.forEach((err) => {
        formattedErrors[err.path[0]] = err.message;
      });
      setErrors(formattedErrors);
      return;
    }

    setErrors({});
    setCartData([]);
    navigate("/orderConfirmed");
  }

  async function formatCep(cep: string) {
    try {
      const response = await fetch(
        `https://brasilapi.com.br/api/cep/v1/${cep}`
      );
      const data = await response.json();
      return data;
    } catch (e) {
      return {
        neighborhood: "",
        street: "",
        state: "",
        city: "",
      };
    }
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
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
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
