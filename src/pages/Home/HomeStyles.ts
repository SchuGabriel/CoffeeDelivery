import styled from "styled-components";

import backgroundImage from "./image/Background.png";
import { Plus } from "@phosphor-icons/react";

interface DifferentiatorsItem {
  color: string;
}

export const HeroContainer = styled.div`
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;

  height: 34rem;
  padding: 5.75rem 10rem;
  gap: 3.5rem;
`;

export const Title = styled.h1`
  font-family: "Baloo 2", sans-serif;
  font-weight: 800;
  font-size: 3rem;
  color: ${(props) => props.theme["base-title"]};
  line-height: 130%;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 130%;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const DifferentiatorsItems = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: 400;

  & > p {
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const DifferentiatorsIcon = styled.div<DifferentiatorsItem>`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.color};
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
`;

export const TitleSection = styled.div`
  margin-bottom: 4.125rem;
`;

export const DifferentiatorsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2.5rem;
  grid-row-gap: 1.25rem;
  grid-auto-flow: row;
`;

export const MenuSection = styled.div`
  padding: 2rem 10rem;
`;

export const MenuTitle = styled.div`
  font-family: "Baloo 2", sans-serif;
  font-weight: 800;
  font-size: 2rem;
  color: ${(props) => props.theme["base-subtitle"]};

  margin-bottom: 3.375rem;
`;

export const MenuContainer = styled.div`
  display: flex;
  gap: 2.5rem 2rem;
  flex-wrap: wrap;
`;

export const MenuItem = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px;

  max-width: 16rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1.25rem 1.25rem 1.25rem;

  & > img {
    object-fit: none;
    object-position: 50% -20px;
    overflow: visible;
  }
`;

export const MenuItemDetails = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 0.625rem;

  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  gap: 4px;
  flex-wrap: wrap;
`;

export const ItemDetail = styled.p`
  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};

  border-radius: 100px;
  padding: 0.25rem 0.5rem;
`;

export const MenuItemTitle = styled.h4`
  font-family: "Baloo 2", sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  color: ${(props) => props.theme["base-subtitle"]};
  margin-bottom: 0.5rem;
`;

export const MenuItemSubTitle = styled.h6`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  color: ${(props) => props.theme["base-label"]};
  margin-bottom: 2.06rem;
  text-align: center;
`;

export const MenuItemBuyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > span {
    font-family: "baloo 2", sans-serif;
    font-weight: 800;
    font-size: 1.5rem;
    margin-right: 1.5rem;
  }

  & > span::before {
    content: "R$";
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const MenuItemActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const MenuItemQuantity = styled.div`
  background-color: ${(props) => props.theme["base-button"]};

  display: flex;
  align-items: center;

  border-radius: 6px;
  gap: 4px;
  padding: 0.5rem;

  & > span {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: ${props => props.theme["base-text"]};
  }
`;

export const PlusMiniusButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const MenuItemActionShopping = styled.div`
  background-color: ${(props) => props.theme["purple-dark"]};
  padding: 0.5rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;

  cursor: pointer;
`;
