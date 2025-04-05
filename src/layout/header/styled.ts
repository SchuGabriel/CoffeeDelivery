import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 6.5rem;
  background-color: ${(props) => props.theme.background};
  padding: 2rem 10rem;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    padding: 2rem;
    width: 100%;
  }
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
  position: relative;
`;

export const LengthBadge = styled.span`
  position: absolute;
  top: -0.45rem;
  right: -0.45rem;
  background-color: ${(props) => props.theme["yellow-dark"]};
  color: ${(props) => props.theme["white"]};
  font-size: 0.75rem;
  font-weight: 700;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
