import { NavLink } from "react-router-dom";
import { MapIcon } from "./components/MapIcon";
import { ShoppingCartIcon } from "./components/ShopCartIcon";
import {
  HeaderContainer,
  LengthBadge,
  LocalItem,
  NavbarContainer,
  SectionContainer,
  SectionItem,
  ShoppingItem,
} from "./styled";
import { defaultTheme } from "../../styles/themes/default";
import { useCart } from "../../context/CartContext";
import { Brand } from "./components/Brand";

export function Header() {
  const { cartData } = useCart();

  return (
    <HeaderContainer>
      <NavbarContainer>
        <div>
          <NavLink to="/">
            <Brand />
          </NavLink>
        </div>
        <SectionContainer>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <LocalItem>
              <MapIcon />
              Porto Alegre, RS
            </LocalItem>
          </NavLink>
          <NavLink to="/shopping/cart" style={{ textDecoration: "none" }}>
            <ShoppingItem>
              <ShoppingCartIcon />
              {cartData.length > 0 && (
                <LengthBadge>{cartData.length}</LengthBadge>
              )}
            </ShoppingItem>
          </NavLink>
        </SectionContainer>
      </NavbarContainer>
    </HeaderContainer>
  );
}
