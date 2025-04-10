import styled from "styled-components";

interface IconProps {
  backgroundColor: string;
}

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
  padding: 5rem 10rem;

  @media (max-width: 930px) {
    padding: 2rem;
  }
`;

export const OrderHeader = styled.div`
  line-height: 130%;

  h3 {
    font-family: "baloo 2", serif;
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme["yellow-dark"]};
    margin-bottom: 0.25rem;
  }

  p {
    font-family: "roboto", serif;
    font-size: 1.25rem;
    font-weight: 400;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const OrderDetails = styled.div`
  display: flex;
  gap: 6.25rem;
  width: 100%;

  @media (max-width: 1270px) {
    flex-wrap: wrap;
    gap: 3rem;
  }
`;

export const InfoContainer = styled.div`
  border: 1px solid transparent;
  border-image: linear-gradient(to right, red, yellow);
  border-radius: 6px 36px;
  background: linear-gradient(
        ${(props) => props.theme["background"]},
        ${(props) => props.theme["background"]}
      )
      padding-box,
    linear-gradient(
        135deg,
        ${(props) => props.theme["yellow"]},
        ${(props) => props.theme["purple"]}
      )
      border-box;

  padding: 2.5rem;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 1270px) {
    width: 100%;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const IconContainer = styled.div<IconProps>`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  height: 2rem;
  width: 2rem;
`;

export const InfoText = styled.div`
  font-family: "roboto", sans-serif;
  line-height: 130%;
  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme["base-text"]};

  span {
    font-weight: 700;
  }
`;

export const OrderImage = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;

  img {
    max-width: 100%;
  }
`;
