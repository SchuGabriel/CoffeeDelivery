import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 6.5rem;
  background-color: ${(props) => props.theme.background};
  padding: 2rem 10rem;
`;

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SectionContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const SectionItem = styled.div`
  display: flex;
  align-items: center;

  border-radius: 8px;
  gap: 4px;
  cursor: pointer;

  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
`;

export const LocalItem = styled(SectionItem)`
  background-color: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};
  padding: 0.5rem;
`;

export const ShoppingItem = styled(SectionItem)`
  background-color: ${(props) => props.theme["yellow-light"]};
  padding: 0.5rem;
`;
