import styled from "styled-components";

interface DefineFontProps {
  size: number;
  weight: number;
  color: string;
}

export const PText = styled.span`
  font-family: "roboto", sans-serif;
  font-weight: 400;
  line-height: 130%;
  font-size: 1rem;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const SpanText = styled.span`
  font-family: "roboto", sans-serif;
  font-weight: 400;
  line-height: 130%;
  font-size: 0.875rem;
  color: ${(props) => props.theme["base-text"]};
`;

export const CartContainer = styled.div`
  padding: 2.5rem 10rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

export const OrderInfoContainer = styled.div``;

export const AddressAndPaymentContainer = styled.div``;

export const DeliveryInfoHeader = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const DeliveryContainer = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  margin-bottom: 0.75rem;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const DeliveryInfoText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PaymentContainer = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
`;

export const DeliveryInfoAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > div {
    display: flex;
    gap: 0.75rem;
  }

  & > div > input {
    background-color: ${(props) => props.theme["base-input"]};
    color: ${(props) => props.theme["base-label"]};
    border: 1px solid ${(props) => props.theme["base-button"]};
    padding: 0.75rem;
    border-radius: 4px;

    font-family: "roboto", sans-serif;
    font-weight: 400;
    line-height: 130%;
    font-size: 0.85rem;
  }
`;

export const PaymentMethodContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;

  & > div {
    background-color: ${(props) => props.theme["base-button"]};
    border-radius: 6px;
    padding: 1rem;
    display: flex;
    align-items: center;
    width: calc(100% / 3);
    gap: 0.75rem;
  }

  & > div > span {
    color: ${(props) => props.theme["base-text"]};
    font-family: "roboto", sans-serif;
    font-size: 0.75rem;
    font-weight: 400;
  }
`;

export const ProductsInfoContainer = styled.div``;

export const CoffeeSelectionContainer = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px 44px;
  padding: 2.5rem;
`;

export const CoffeeSelectioned = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.25rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};

  img {
    width: 4rem;
  }

  & + & {
    margin-top: 1.5rem;
  }

  p {
    color: ${(props) => props.theme["base-text"]};
  }

  div {
    display: flex;
    align-items: center;
    gap: 1.25rem;
  }

  div > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const TotalSummary = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  font-family: "roboto", sans-serif;
  font-weight: 400;

  div {
    display: flex;
    justify-content: space-between;
  }
  p :not(.PriceContainer) {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.25rem;
    font-weight: 700;
  }
`;

export const TotalSummaryPrice = styled.span`
  font-size: 1rem;
  color: ${(props) => props.theme["base-text"]};
`;

export const TitleContainerText = styled.h6`
  font-family: "baloo 2", sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
  color: ${(props) => props.theme["base-subtitle"]};
  line-height: 130%;
`;

export const FontDefine = styled.p<DefineFontProps>`
  font-family: "roboto", sans-serif;
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size}rem;
  color: ${(props) => props.color};
  line-height: 130%;
`;
